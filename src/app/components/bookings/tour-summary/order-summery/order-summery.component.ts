import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-summery',
  imports: [],
  templateUrl: './order-summery.component.html',
  styleUrl: './order-summery.component.scss',
})
export class OrderSummeryComponent {
  operator: string = 'Egipto Excursiones';
  promoCode: string = '';

  bookingData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.bookingData = navigation?.extras.state?.['booking'];
    console.log("Booking data at booking :", this.bookingData);

  }


  ngOnInit(): void {
    if (!this.bookingData) {
      console.warn('No booking data found in router state');
    }
  }
}
