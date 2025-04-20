import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DestinationService } from '../../../services/Destinations/destination.service';
import { IDestination } from '../../../models/Destination/idestination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Itrip } from '../../../models/Trips/itrip';
import { TripsService } from '../../../services/trips/trips.service';

@Component({
  selector: 'app-create-trip',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-trip.component.html',
  styleUrl: './create-trip.component.scss',
})
export class CreateTripComponent {
  searchResults: IDestination[] = [];

  selectedDestinationName: string = '';
  selectedDestinationId: string = '';
  tripName: string = '';

  tripNameError: boolean = false;
  destinationError: boolean = false;

  @Input() offcanvasRef: any;

  constructor(
    private destinationService: DestinationService,
    private tripsService: TripsService
  ) {}

  onDestinationInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (value) {
      this.destinationService.searchDestination(value).subscribe({
        next: (res) => {
          this.searchResults = res;
          console.log('Search result:', res);
        },
        error: (err) => {
          console.error('Search error:', err);
          this.searchResults = [];
        },
      });
    } else {
      this.searchResults = [];
    }
  }

  selectDestination(destination: IDestination): void {
    this.selectedDestinationName = destination.name;
    this.selectedDestinationId = destination._id;
    this.searchResults = [];
  }

  @Output() tripCreated = new EventEmitter<void>();
  createTrip() {
    this.tripNameError = !this.tripName.trim();
    this.destinationError = !this.selectedDestinationName.trim();

    if (this.tripNameError || this.destinationError) {
      return;
    }

    const tripData: Itrip = {
      name: this.tripName,
      destination: this.selectedDestinationId,
    };

    this.tripsService.createTrip(tripData).subscribe({
      next: (res) => {
        console.log('Trip created successfully:', res);
         this.tripCreated.emit(); 
        this.offcanvasRef.close();
      },
      error: (err) => {
        console.error('Error creating trip:', err);
      },
    });
  }
}
