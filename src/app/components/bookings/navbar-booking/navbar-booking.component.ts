import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-booking',
  imports: [RouterLink],
  templateUrl: './navbar-booking.component.html',
  styleUrl: './navbar-booking.component.scss',
})
export class NavbarBookingComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isStepActive(step: string): boolean {
    const steps = ['contact-details', 'activity-details', 'payment-details'];
    const currentIndex = steps.indexOf(this.currentRoute.replace('/Booking/', ''));
    // console.log(currentIndex);
    
    const stepIndex = steps.indexOf(step);
    return stepIndex <= currentIndex;
  }
}
