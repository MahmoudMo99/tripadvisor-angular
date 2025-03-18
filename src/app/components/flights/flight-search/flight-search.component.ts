import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightService } from '../../../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  flightForm: FormGroup;
  tripType: string = 'roundTrip';
  isDropdownOpen: boolean = false;
  isInvalidDateRange: boolean = false;
  searchResults: any[] = [];
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private flightService: FlightService, private router: Router) {
    this.flightForm = this.fb.group({
      tripType: ['roundTrip'],
      from: ['', Validators.required],
      to: ['', Validators.required],
      date: [''],
      startDate: [''],
      endDate: [''],
      class: ['econmy'],
      passengers: this.fb.group({
        adults: [1, Validators.min(1)],
        children: [0, Validators.min(0)],
        seniors: [0, Validators.min(0)]
      }),
      preferNonStop: [false],
      includeNearbyAirports: [false],
      multiCitySegments: this.fb.array([])
    });
  }

  ngOnInit(): void {
    // Initialize search results or perform any necessary setup
    this.searchResults = [];
    this.errorMessage = '';
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

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  adjustPassengers(type: 'adults' | 'children' | 'seniors', increase: boolean) {
    const control = this.flightForm.get(`passengers.${type}`);
    if (control) {
      let value = control.value;
      value = increase ? value + 1 : Math.max(value - 1, type === 'adults' ? 1 : 0);
      control.setValue(value);
    }
  }
  onSubmit() {
    if (this.flightForm.invalid) {
      this.errorMessage = 'Please fill in all required fields (From and Where).';
      return;
    }
  
    // إذا كان النموذج صالحًا، تابع عملية البحث
    const formValue = this.flightForm.value;
    let searchQuery: any = {
      tripType: this.tripType,
      from: formValue.from,
      to: formValue.to,
      class: formValue.class,
      passengers: formValue.passengers,
      preferNonStop: formValue.preferNonStop,
      includeNearbyAirports: formValue.includeNearbyAirports
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
    console.log('Search Query:', query); 
    this.flightService.searchFlights(query).subscribe({
      next: (results) => {
        console.log('Search Results:', results); 
        this.searchResults = results;
        this.router.navigate(['/searched-flight'], { queryParams: query });
      },
      error: (err) => {
        console.error('Error searching flights:', err);
        this.errorMessage = 'An error occurred while searching for flights.';
      }
    });
  }
}
