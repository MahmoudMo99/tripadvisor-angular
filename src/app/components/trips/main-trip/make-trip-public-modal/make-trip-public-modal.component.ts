import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TripsService } from '../../../../services/trips/trips.service';
import { DestinationService } from '../../../../services/Destinations/destination.service';
import { IDestination } from '../../../../models/Destination/idestination';
import { format } from 'date-fns';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-make-trip-public-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './make-trip-public-modal.component.html',
  styleUrls: ['./make-trip-public-modal.component.css'],
})
export class MakeTripPublicModalComponent implements OnInit {
  @Input() trip: any;
  tripForm!: FormGroup;
  searchResults: IDestination[] = [];

  constructor(
    private fb: FormBuilder,
    private tripsService: TripsService,
    private destinationService: DestinationService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
   this.tripForm = this.fb.group({
  name: [this.trip?.name || ''],
  destinationId: [this.trip?.destination?._id || ''],        
  destinationName: [this.trip?.destination?.name || ''],    
  date: [this.trip?.date || ''],
  description: [this.trip?.description || ''],
  visibility: [this.trip?.visibility || 'public'],
});

  }

  onCancel() {
    this.activeModal.dismiss('cancel');
  }

  onDelete() {
    this.activeModal.close('delete');
  }

  onDestinationInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();
    if (value) {
      this.destinationService.searchDestination(value).subscribe((res) => {
        this.searchResults = res;
      });
    } else {
      this.searchResults = [];
    }
  }

selectDestination(destination: IDestination): void {
  this.tripForm.patchValue({
    destinationId: destination._id,
    destinationName: destination.name
  });
  this.searchResults = [];
}


 onSubmit() {
  if (this.tripForm.valid) {
    const formValue = { ...this.tripForm.value };

    if (formValue.date) {
      formValue.date = format(new Date(formValue.date), 'yyyy-MM-dd');
    }

    formValue.destination = formValue.destinationId;
    delete formValue.destinationId;
    delete formValue.destinationName;

    console.log('Submitting with:', formValue);

    this.tripsService.makeTripPublicAndUpdate(this.trip._id, formValue).subscribe({
      next: (updatedTrip) => {
        console.log('Update successful:', updatedTrip);
        this.activeModal.close('updated');
      },
      error: (err) => {
        console.error('Update failed:', err);
      }
    });
  }
}

}
