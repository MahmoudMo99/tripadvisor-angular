import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dinner-restautant',
  imports: [CommonModule,RouterLink],
  templateUrl: './dinner-restautant.component.html',
  styleUrl: './dinner-restautant.component.scss'
})
export class DinnerRestautantComponent {
  dinnerRestaurants: any[] = [];

  constructor(private dinnerRestaurant:RestaurantService) {}
  ngOnInit(): void {
    this.dinnerRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
      this.dinnerRestaurants = restaurants.filter(rest =>
        rest.features?.mealTypes?.includes('Dinner')
      );
    });
  }

  createRatingArray(rating: number): any[] {
    return new Array(rating);
  }
}
