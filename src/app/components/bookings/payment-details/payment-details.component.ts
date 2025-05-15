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

    console.log(
      'History state at paymenttttttttttttttt:',
      this.historyState.booking
    );
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
            const historyBooking = this.historyState.booking;

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
              type: booking.type || historyBooking?.type,
              reference: booking.reference || historyBooking?.reference,
              Location: activity.pickupLocation,
              paymentDetails: {
                method: this.paymentForm.value.paymentMethod,
              },
              // ✅ Add check-in/out and roomId from navigation state
              checkIn: historyBooking?.checkIn
                && new Date(historyBooking.checkIn).toISOString().split('T')[0],
              checkOut: historyBooking?.checkOut && new Date(historyBooking.checkOut).toISOString().split('T')[0],
             
              roomId: historyBooking?.roomId,
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
