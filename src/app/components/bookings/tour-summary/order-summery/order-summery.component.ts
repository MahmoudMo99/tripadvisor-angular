import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summery',
  imports: [],
  templateUrl: './order-summery.component.html',
  styleUrl: './order-summery.component.scss',
})
export class OrderSummeryComponent {
  tourTitle: string = 'Luxor Day Tour: Visit Dendara and Abydos Temples';
  operator: string = 'Egipto Excursiones';
  imageUrl: string =
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/12/59/bf/67.jpg';
  date: string = 'Sunday, March 16, 2025';
  time: string = '9:00 AM';
  travelers: string = '2 Adults';
  price: number = 150.0;
  promoCode: string = '';
}
