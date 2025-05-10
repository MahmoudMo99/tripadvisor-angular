import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderSummeryComponent } from './order-summery/order-summery.component';

@Component({
  selector: 'app-tour-summary',
  imports: [CommonModule,OrderSummeryComponent],
  templateUrl: './tour-summary.component.html',
  styleUrl: './tour-summary.component.scss',
})
export class TourSummaryComponent {
  price: number = 150.0;
  supportPhone = '+1 855 275 5071';
  isOrderDetailsVisible = false;

  toggleOrderDetails() {
    this.isOrderDetailsVisible = !this.isOrderDetailsVisible;
  }
}
