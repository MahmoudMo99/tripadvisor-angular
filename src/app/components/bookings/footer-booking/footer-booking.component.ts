import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-booking',
  imports: [],
  templateUrl: './footer-booking.component.html',
  styleUrl: './footer-booking.component.scss',
})
export class FooterBookingComponent {
  currentYear: number = new Date().getFullYear();
}
