import { Component } from '@angular/core';
import { NavbarBookingComponent } from "../navbar-booking/navbar-booking.component";
// import { ContactDetailsComponent } from "../contact-details/contact-details.component";
import { TourSummaryComponent } from "../tour-summary/tour-summary.component";
import { FooterBookingComponent } from "../footer-booking/footer-booking.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [NavbarBookingComponent, RouterOutlet, TourSummaryComponent, FooterBookingComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

}
