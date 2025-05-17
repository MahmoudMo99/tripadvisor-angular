import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-breackfast-restautant',
  imports: [RouterLink, CommonModule],
  templateUrl: './breackfast-restautant.component.html',
  styleUrl: './breackfast-restautant.component.scss',
})
export class BreackfastRestautantComponent {
  breackfastkMeal: any[] = [];

  constructor(private breackfastRestaurant: RestaurantService) {}

  ngOnInit(): void {
    this.breackfastRestaurant
      .getRecentlyRestaurant()
      .subscribe((restaurants) => {
        this.breackfastkMeal = restaurants
          .filter((rest) => rest.features?.mealTypes?.includes('Breakfast'))
          .map((rest: any) => ({
            title: rest.name,
            image:
              rest.images?.restaurantImages?.[0] || 'assets/default-image.jpg',
            link: `/restaurants/${rest._id}`,
            rate: rest.rating || 0,
            reviews: rest.numberOfReviews || 0,
          }));
      });
  }

  getRatingFillArray(rate: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < 5; i++) {
      const diff = rate - i;
      if (diff >= 1) result.push(1);
      else if (diff > 0) result.push(diff);
      else result.push(0);
    }
    return result;
  }
}
