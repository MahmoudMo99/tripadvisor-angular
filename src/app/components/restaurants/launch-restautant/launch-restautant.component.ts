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
  // ngOnInit(): void {
  //   this.launchRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
  //     this.launchMeal = restaurants.filter(rest =>
  //       rest.features?.mealTypes?.includes('Lunch')
  //     );
  //   });
  // }


     ngOnInit(): void {
    this.launchRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
      this.launchMeal = restaurants
        .filter(rest => rest.features?.mealTypes?.includes('Lunch'))
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
  // createArray(rate: number): number[] {
  //   return new Array(Math.round(rate)).fill(0);
  // }


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

