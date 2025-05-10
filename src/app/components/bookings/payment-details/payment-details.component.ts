import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/bookingServices/booking.service';
import { ActivityServiceService } from '../../../services/bookingServices/activity-service.service';
import { PaymentService } from '../../../services/bookingServices/payment.service';
import { take } from 'rxjs';
import { Ibooking } from '../../../models/bookings/ibooking';

@Component({
  selector: 'app-payment-details',
  imports: [ReactiveFormsModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss',
})
export class PaymentDetailsComponent {
  paymentForm!: FormGroup;
  totalPrice: number = 150.0;
  isLoading: boolean = false;
  errorMessage: string = '';
  historyState = history.state;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookingService: BookingService,
    private activityService: ActivityServiceService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      paymentMethod: ['', Validators.required],
    });


   
    console.log('History state at payment:', this.historyState.booking);
    

  }

  onSubmit() {
    if (this.paymentForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    this.bookingService
      .getBookingData$()
      .pipe(take(1))
      .subscribe((booking) => {
        this.activityService
          .getActivityData$()
          .pipe(take(1))
          .subscribe((activity) => {
            const bookingPayload: Ibooking = {
              leadTraveler: {
                firstName: booking.firstName,
                lastName: booking.lastName,
              },
              traveler2: {
                firstName: activity.traveler2FirstName,
                lastName: activity.traveler2LastName,
              },
              email: booking.email,
              phoneNumber: booking.phoneNumber,
              type: booking.type || this.historyState.booking?.type,
              reference:
                booking.referenceId || this.historyState.booking?.referenceId,
              Location: activity.pickupLocation,
              paymentDetails: {
                method: this.paymentForm.value.paymentMethod,
              },
            };

            this.paymentService.submitBooking(bookingPayload).subscribe({
              next: (response) => {
                console.log('Booking successful:', response);
                this.isLoading = false;
                this.router.navigate(['/Home']);
              },
              error: (error) => {
                console.log('Booking data:', booking);
                console.log('Activity data:', activity);

                console.error('Booking failed:', error);
                this.errorMessage = 'Booking failed. Please try again.';
                this.isLoading = false;
              },
            });
          });
      });
  }
}
