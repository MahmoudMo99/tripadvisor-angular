import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../../services/bookingServices/booking.service';
import { ActivityServiceService } from '../../../services/bookingServices/activity-service.service';
import { PaymentService } from '../../../services/bookingServices/payment.service';

@Component({
  selector: 'app-payment-details',
  imports: [ReactiveFormsModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss',
})
export class PaymentDetailsComponent {
  paymentForm!: FormGroup;
  totalPrice: number = 150.00;
  isLoading: boolean = false;
  errorMessage: string = '';

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
  }

  onSubmit() {
    if (this.paymentForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';


    const bookingData = {
      ...this.bookingService.getBookingData$(),
      ...this.activityService.getActivityData$(),
      // paymentMethod: this.paymentForm.value.paymentMethod,
    };

    
    // this.paymentService.submitBooking(bookingData).subscribe({
    //   next: (response: any) => {
    //     console.log('Booking Successful:', response);
    //     this.isLoading = false;
    //     this.router.navigate(['/Home']); 
    //   },
    //   error: (error: any) => {
    //     console.log('data send is ', bookingData);
        
    //     console.error('Booking Failed:', error);
    //     this.errorMessage = 'Booking failed. ';
    //     this.isLoading = false;
    //   },
    // });
  }
}
