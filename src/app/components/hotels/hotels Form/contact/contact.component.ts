// contact.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StepsComponent } from '../steps/steps.component';
import { Router } from '@angular/router';
import { BookingSummaryComponent } from "./booking-summary/booking-summary.component";
import { ICards } from '../../../../models/attractions/i-cards';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, StepsComponent, BookingSummaryComponent],
})
export class ContactComponent implements OnInit {
    @Output() attractionClick = new EventEmitter<string>();
  attraction: ICards[] = [];
  contactForm: FormGroup;
  bookingData: any;
  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{1,14}$/)]],
      smsUpdates: [false],
      promoCode: [''],
    });

  const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { booking: any };

    if (state?.booking) {
      this.bookingData = state.booking;
      console.log('Received booking data:', this.bookingData);
    } else {
      console.log('No booking data found in navigation state.');
    }

  }
  ngOnInit(): void {
    
  }
    
  
 
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // this.router.navigate(['/activity']);
        this.router.navigate([`/attraction/activity`], {
      state: { booking: this.bookingData }
    }).then(() => {
      window.scrollTo(0, 0);
    });
  
    } else {
      this.contactForm.markAllAsTouched();
    }
  }



  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}