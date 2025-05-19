import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../../services/bookingServices/booking.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  selectedCountry = '+1';
  formSubmitted = false;
  subscription!: Subscription;

  historyState = history.state;

  countries = [
    { name: 'United States', code: '+1', regex: /^[2-9]\d{9}$/ },
    { name: 'Egypt', code: '+20', regex: /^01\d{9}$/ },
    { name: 'India', code: '+91', regex: /^[6789]\d{9}$/ },
    { name: 'United Kingdom', code: '+44', regex: /^7\d{9}$/ },
  ];

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          ),
        ],
      ],
      countryCode: ['+1', Validators.required],
      phoneNumber: ['', Validators.required],
      smsUpdates: [false],
    });

    console.log('History state at contact:', this.historyState.booking);
  }

  ngOnInit() {
    this.subscription = this.bookingService
      .getBookingData$()
      .subscribe((data) => {
        if (data) {
          this.contactForm.patchValue(data);
        }
      });
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  get selectedCountryRegex() {
    return this.countries.find((c) => c.code === this.selectedCountry)?.regex;
  }

  validatePhoneNumber() {
    const phone = this.phoneNumber?.value;
    if (this.selectedCountryRegex && !this.selectedCountryRegex.test(phone)) {
      this.phoneNumber?.setErrors({ invalidFormat: true });
    } else {
      this.phoneNumber?.setErrors(null);
    }
  }

  onCountryChange(code: string) {
    this.selectedCountry = code;

    const currentPhone = this.phoneNumber?.value;

    if (
      this.selectedCountryRegex &&
      !this.selectedCountryRegex.test(currentPhone)
    ) {
      this.phoneNumber?.setErrors({ invalidCountryFormat: true });
    } else {
      this.phoneNumber?.setErrors(null);
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);

      this.bookingService.setBookingData(this.contactForm.value);
      this.router.navigate(['/Booking/activity-details'], {
        state: { booking :this.historyState?.booking},
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
