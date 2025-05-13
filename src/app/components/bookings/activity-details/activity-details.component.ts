import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../../services/bookingServices/booking.service';
import { Subscription } from 'rxjs';
import { ActivityServiceService } from '../../../services/bookingServices/activity-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-details',
  imports: [ReactiveFormsModule],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.scss',
})
export class ActivityDetailsComponent {
  activityForm!: FormGroup;
  bookingSubscription!: Subscription;
  formSubmitted: boolean = false;

  pickupLocations = [
    'Hotel Lobby',
    'Airport',
    'Tour Office',
    'Custom Location',
  ];
  languages = [
    'English - Guide',
    'Spanish - Guide',
    'French - Guide',
    'German - Guide',
  ];

  historyState = history.state;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private activityService: ActivityServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activityForm = this.fb.group({
      firstName: [{ value: '', disabled: true }, Validators.required],
      lastName: [{ value: '', disabled: true }, Validators.required],
      passportNumber: ['', Validators.required],
      country: ['', Validators.required],
      expirationDate: ['', Validators.required],

      traveler2FirstName: ['', Validators.required],
      traveler2LastName: ['', Validators.required],
      traveler2PassportNumber: ['', Validators.required],
      traveler2Country: ['', Validators.required],
      traveler2ExpirationDate: ['', Validators.required],

      pickupLocation: ['', Validators.required],
      tourLanguage: ['English - Guide', Validators.required],
    });

    this.bookingSubscription = this.bookingService
      .getBookingData$()
      .subscribe((data) => {
        if (data) {
          this.activityForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
          });
        }
      });


     console.log('History state at activity:', this.historyState.booking);

  }

  get pickupLocation() {
    return this.activityForm.get('pickupLocation');
  }
  get passportNumber() {
    return this.activityForm.get('passportNumber');
  }
  get country() {
    return this.activityForm.get('country');
  }
  get expirationDate() {
    return this.activityForm.get('expirationDate');
  }

  get traveler2FirstName() {
    return this.activityForm.get('traveler2FirstName');
  }
  get traveler2LastName() {
    return this.activityForm.get('traveler2LastName');
  }
  get traveler2PassportNumber() {
    return this.activityForm.get('traveler2PassportNumber');
  }
  get traveler2Country() {
    return this.activityForm.get('traveler2Country');
  }
  get traveler2ExpirationDate() {
    return this.activityForm.get('traveler2ExpirationDate');
  }

  onSubmit() {
  this.formSubmitted = true;
  if (this.activityForm.valid) {
    this.activityService.setActivityData(this.activityForm.value);
    console.log('Activity Details Saved:', this.activityForm.value);

    this.router.navigate(['/Booking/payment-details'], {
      state: {
        booking: {
          type: this.historyState?.booking?.type,
          referenceId: this.historyState?.booking?.referenceId,
        },
      },
    });
  }
}


  ngOnDestroy() {
    if (this.bookingSubscription) {
      this.bookingSubscription.unsubscribe();
    }
  }
}
