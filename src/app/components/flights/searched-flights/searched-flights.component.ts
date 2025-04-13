import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../../services/flight.service';
import { Subscription,  } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-searched-flights',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './searched-flights.component.html',
  styleUrls: ['./searched-flights.component.scss']
})
export class SearchedFlightsComponent implements OnInit {
  flightForm!: FormGroup;
  tripType: string = 'roundTrip';
  searchResults: any[] = [];
  filteredResults: any[] = [];
  isInvalidDateRange: boolean = false;
  errorMessage: string = '';
  isDropdownOpen: boolean = false;

  private subscription: Subscription | undefined;

  availableAirlines: string[] = ['Nesma', 'Other airline'];

  filters = {
    stops: { nonStop: false, oneStop: false, twoPlusStops: false },
    airlines: {} as { [key: string]: boolean },
    price: 5000,
    duration: 24
  };

  isStopsOpen = false;
  isAirlinesOpen = false;
  isPriceOpen = false;
  isDurationOpen = false;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.availableAirlines.forEach(airline => {
      this.filters.airlines[airline] = false;
    });

    this.flightForm = this.fb.group({
      from: [''],
      to: [''],
      startDate: [''],
      endDate: [''],
      date: [''],
      tripType: ['roundTrip'],
      passengers: this.fb.group({
        adults: [1],
        children: [0],
        seniors: [0]
      }),
      multiCitySegments: this.fb.array([])
    });

    this.subscription = this.route.queryParams.subscribe(params => {
      if (params) {
        this.fetchFlights(params);
      }
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  get multiCitySegments(): FormArray {
    return this.flightForm.get('multiCitySegments') as FormArray;
  }

  getMultiCitySegment(index: number): FormGroup {
    return this.multiCitySegments.at(index) as FormGroup;
  }

  addSegment() {
    const segmentGroup = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.multiCitySegments.push(segmentGroup);
  }

  removeSegment(index: number) {
    if (this.multiCitySegments.length > 1) {
      this.multiCitySegments.removeAt(index);
    }
  }
  validateDateRange() {
    const startDate = this.flightForm.get('startDate')?.value;
    const endDate = this.flightForm.get('endDate')?.value;

    if (startDate && endDate) {
      this.isInvalidDateRange = new Date(startDate) > new Date(endDate);
    } else {
      this.isInvalidDateRange = false;
    }
  }

  adjustPassengers(type: 'adults' | 'children' | 'seniors', increase: boolean) {
    const control = this.flightForm.get(`passengers.${type}`);
    if (control) {
      let value = control.value;
      value = increase ? value + 1 : Math.max(value - 1, type === 'adults' ? 1 : 0);
      control.setValue(value);
    }
  }

  setTripType(type: string) {
    this.tripType = type;
    this.flightForm.patchValue({ tripType: type });

    if (type === 'roundTrip') {
      this.flightForm.patchValue({ date: '', multiCitySegments: [] });
    } else if (type === 'oneWay') {
      this.flightForm.patchValue({ startDate: '', endDate: '', multiCitySegments: [] });
    } else if (type === 'multiCity') {
      this.flightForm.patchValue({ from: '', to: '', date: '', startDate: '', endDate: '' });
    }
  }

  onSubmit() {
    const formValue = this.flightForm.value;
    const searchQuery: any = {
      from: formValue.from,
      to: formValue.to,
      passengers: formValue.passengers,
      tripType: this.tripType
    };

    if (this.tripType === 'roundTrip') {
      searchQuery.startDate = formValue.startDate;
      searchQuery.endDate = formValue.endDate;
    } else if (this.tripType === 'oneWay') {
      searchQuery.date = formValue.date;
    } else if (this.tripType === 'multiCity') {
      searchQuery.segments = formValue.multiCitySegments;
    }

    this.searchFlights(searchQuery);
  }

  searchFlights(query: any) {
    this.flightService.searchFlights(query).subscribe({
      next: (results: any[]) => {
        this.searchResults = results.filter(
          (flight: any, index: number, self: any[]) =>
            index === self.findIndex((f: any) => f.id === flight.id)
        );
        this.filteredResults = [...this.searchResults];
      },
      error: (err) => {
        console.error('Error fetching flights:', err);
      }
    });
  }

  fetchFlights(query: any) {
    this.searchFlights(query);
  }

  getLowestSeatPrice(seats: any[]): number {
    if (!seats || seats.length === 0) return 0;
    return Math.min(...seats.map(seat => seat.price));
  }

  getflightbyid(flightId: string) {
    if (!flightId) {
      console.error('Flight ID is missing');
      return;
    }
    this.router.navigate(['/getflightdetails', flightId]);
  }

  applyFilters() {
    this.filteredResults = this.searchResults.filter(flight => {
      const stops = flight.stops || 0;
      const stopsFilter =
        (this.filters.stops.nonStop && stops === 0) ||
        (this.filters.stops.oneStop && stops === 1) ||
        (this.filters.stops.twoPlusStops && stops >= 2) ||
        (!this.filters.stops.nonStop && !this.filters.stops.oneStop && !this.filters.stops.twoPlusStops);

      const airlineFilter =
        Object.values(this.filters.airlines).some(value => value) ?
          this.filters.airlines[flight.airline] :
          true;

      const priceFilter = this.getLowestSeatPrice(flight.seats) <= this.filters.price;

      const durationFilter = (flight.flightDuration || 0) <= this.filters.duration;

      return stopsFilter && airlineFilter && priceFilter && durationFilter;
    });
  }

  toggleAccordion(section: string) {
    switch (section) {
      case 'stops':
        this.isStopsOpen = !this.isStopsOpen;
        break;
      case 'airlines':
        this.isAirlinesOpen = !this.isAirlinesOpen;
        break;
      case 'price':
        this.isPriceOpen = !this.isPriceOpen;
        break;
      case 'duration':
        this.isDurationOpen = !this.isDurationOpen;
        break;
    }
  }
}