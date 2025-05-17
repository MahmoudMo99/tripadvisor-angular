
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../../services/flight.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-searched-flights',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './searched-flights.component.html',
  styleUrls: ['./searched-flights.component.scss']
})
export class SearchedFlightsComponent implements OnInit, OnDestroy {
  searchQuery: any;
  flightForm!: FormGroup;
  tripType: string = 'roundTrip';
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

  outboundFlights: any[] = [];
  returnFlights: any[] = [];
  filteredResults: any[] = [];
  errorMessage: string = '';
searchResults: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // Initialize airline filters
    this.availableAirlines.forEach(airline => {
      this.filters.airlines[airline] = false;
    });

    // Retrieve the search query from the service
    this.searchQuery = this.flightService.getSearchQuery();

    if (this.searchQuery) {
      // Set trip type and populate form
      this.tripType = this.searchQuery.tripType || 'roundTrip';
      this.populateForm(this.searchQuery);
      this.fetchFlights(this.searchQuery);
    } else {
      this.errorMessage = 'No search criteria found. Please search again.';
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  initializeForm(): void {
    this.flightForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      startDate: [''],
      endDate: [''],
      date: [''],
      class: ['Economy'],
      passengers: this.fb.group({
        adults: [1, [Validators.required, Validators.min(0)]],
        children: [0, [Validators.required, Validators.min(0)]],
        seniors: [0, [Validators.required, Validators.min(0)]]
      }),
      preferNonStop: [false],
      includeNearbyAirports: [false],
      segments: this.fb.array<FormGroup>([])
    });
  }

  populateForm(query: any): void {
    this.flightForm.patchValue({
      from: query.from || '',
      to: query.to || '',
      startDate: query.startDate || '',
      endDate: query.endDate || '',
      date: query.date || '',
      class: query.class || 'Economy',
      passengers: {
        adults: query.passengers?.adults || 1,
        children: query.passengers?.children || 0,
        seniors: query.passengers?.seniors || 0
      },
      preferNonStop: query.preferNonStop || false,
      includeNearbyAirports: query.includeNearbyAirports || false
    });

    // Populate multi-city segments
    if (query.tripType === 'multiCity' && query.segments?.length) {
      const segmentsArray = this.fb.array<FormGroup>([]);
      query.segments.forEach((segment: any) => {
        segmentsArray.push(this.fb.group({
          from: [segment.from || '', Validators.required],
          to: [segment.to || '', Validators.required],
          date: [segment.date || '', Validators.required]
        }));
      });
      this.flightForm.setControl('segments', segmentsArray);
    }
  }

  get multiCitySegments(): FormArray {
    return this.flightForm.get('segments') as FormArray;
  }

  getMultiCitySegment(index: number): FormGroup {
    return this.multiCitySegments.at(index) as FormGroup;
  }

  addSegment(): void {
    this.multiCitySegments.push(this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      date: ['', Validators.required]
    }));
  }

  removeSegment(index: number): void {
    this.multiCitySegments.removeAt(index);
  }

  setTripType(type: string): void {
    this.tripType = type;
    this.flightForm.patchValue({
      startDate: '',
      endDate: '',
      date: ''
    });
    if (type !== 'multiCity') {
      this.flightForm.setControl('segments', this.fb.array([]));
    } else if (this.multiCitySegments.length === 0) {
      this.addSegment();
    }
  }

  validateDateRange(): void {
    const startDate = this.flightForm.get('startDate')?.value;
    const endDate = this.flightForm.get('endDate')?.value;
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      this.flightForm.get('endDate')?.setErrors({ invalidRange: true });
    } else {
      this.flightForm.get('endDate')?.setErrors(null);
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  adjustPassengers(type: string, increase: boolean): void {
    const passengers = this.flightForm.get('passengers') as FormGroup;
    const currentValue = passengers.get(type)?.value;
    if (increase) {
      passengers.get(type)?.setValue(currentValue + 1);
    } else if (currentValue > 0) {
      passengers.get(type)?.setValue(currentValue - 1);
    }
  }

  onSubmit(): void {
    if (this.flightForm.valid) {
      const query = {
        ...this.flightForm.value,
        tripType: this.tripType,
        segments: this.tripType === 'multiCity' ? this.multiCitySegments.value : []
      };
      this.flightService.setSearchQuery(query);
      this.searchQuery = query;
      this.fetchFlights(query);
    }
  }

  navigateToSearch(): void {
    this.router.navigate(['']);
  }

  // ...existing code...
fetchFlights(query: any): void {
  this.flightService.searchFlights(query).subscribe({
    next: (results: any[]) => {
      this.searchResults = results;
      if (query.tripType === 'roundTrip') {
        this.outboundFlights = results.filter(flight =>
          flight.origin?.name?.toLowerCase() === query.from?.toLowerCase() &&
          flight.destination?.name?.toLowerCase() === query.to?.toLowerCase()
        );
        this.returnFlights = results.filter(flight =>
          flight.origin?.name?.toLowerCase() === query.to?.toLowerCase() &&
          flight.destination?.name?.toLowerCase() === query.from?.toLowerCase()
        );
        this.filteredResults = [...this.outboundFlights];
      } else {
        this.outboundFlights = results.filter(flight =>
          flight.origin?.name?.toLowerCase() === query.from?.toLowerCase() &&
          flight.destination?.name?.toLowerCase() === query.to?.toLowerCase()
        );
        this.returnFlights = [];
        this.filteredResults = [...this.outboundFlights];
      }
      this.applyFilters();
    },
    error: (err) => {
      console.error('Error fetching flights:', err);
      this.errorMessage = 'An error occurred while fetching flights.';
    }
  });
}

  getLowestSeatPrice(seats: any[]): number {
    if (!seats || seats.length === 0) return 0;
    return Math.min(...seats.map(seat => seat.price));
  }

  getflightbyid(flightId: string): void {
    if (!flightId) {
      console.error('Flight ID is missing');
      return;
    }
    this.router.navigate(['/getflightdetails', flightId]);
  }

  applyFilters(): void {
    // Example: filter only outbound flights, you can add logic for returnFlights as needed
    this.filteredResults = this.outboundFlights.filter(flight => {
      const stops = flight.stops || 0;
      const stopsFilter =
        (this.filters.stops.nonStop && stops === 0) ||
        (this.filters.stops.oneStop && stops === 1) ||
        (this.filters.stops.twoPlusStops && stops >= 2) ||
        (!this.filters.stops.nonStop && !this.filters.stops.oneStop && !this.filters.stops.twoPlusStops);

      const airlineFilter =
        Object.values(this.filters.airlines).some(value => value)
          ? this.filters.airlines[flight.airline]
          : true;

      const priceFilter = this.getLowestSeatPrice(flight.seats) <= this.filters.price;

      const durationFilter = (flight.flightDuration || 0) <= this.filters.duration;

      return stopsFilter && airlineFilter && priceFilter && durationFilter;
    });
  }

  toggleAccordion(section: string): void {
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