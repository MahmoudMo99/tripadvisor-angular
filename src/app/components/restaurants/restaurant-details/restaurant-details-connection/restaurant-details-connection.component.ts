import { Component } from '@angular/core';
import { RestaurantDetailsHeaderComponent } from '../restaurant-details-header/restaurant-details-header.component';
import { RestaurantDetailsImagesComponent } from '../restaurant-details-images/restaurant-details-images.component';
import { RestaurantDetailsCardComponent } from '../restaurant-details-card/restaurant-details-card.component';
import { RestaurantDetailsNavComponent } from '../restaurant-details-nav/restaurant-details-nav.component';
import { RestaurantDetailsOverviewComponent } from '../restaurant-details-overview/restaurant-details-overview.component';
import { RestaurantDetailsModelComponent } from '../restaurant-details-model/restaurant-details-model.component';
import { ReviewsComponent } from "../../../reviews/reviews/reviews.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details-connection',
  imports: [RestaurantDetailsHeaderComponent, RestaurantDetailsImagesComponent, RestaurantDetailsNavComponent, ReviewsComponent],
  templateUrl: './restaurant-details-connection.component.html',
  styleUrl: './restaurant-details-connection.component.scss'
})
export class RestaurantDetailsConnectionComponent {
  id: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      console.log('Route ID:', this.id);
    });
  }
}
