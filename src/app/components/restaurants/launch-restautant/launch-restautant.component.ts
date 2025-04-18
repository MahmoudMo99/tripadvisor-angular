import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-launch-restautant',
  imports: [CommonModule, RouterLink],
  templateUrl: './launch-restautant.component.html',
  styleUrl: './launch-restautant.component.scss'
})
export class LaunchRestautantComponent {
 launchMeal: any[] = [];

  constructor(private launchRestaurant:RestaurantService) {}
  ngOnInit(): void {
    this.launchRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
      this.launchMeal = restaurants.filter(rest =>
        rest.features?.mealTypes?.includes('Launch')
      );
    });
  }

  createRatingArray(rating: number): any[] {
    return new Array(rating);
  }
}
