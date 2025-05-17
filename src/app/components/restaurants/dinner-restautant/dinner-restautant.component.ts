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
  // ngOnInit(): void {
  //   this.dinnerRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
  //     this.dinnerRestaurants = restaurants.filter(rest =>
  //       rest.features?.mealTypes?.includes('Dinner')
  //     );
  //   });
  // }

    ngOnInit(): void {
    this.dinnerRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
      this.dinnerRestaurants = restaurants
        .filter(rest => rest.features?.mealTypes?.includes('Dinner'))
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



  //   createArray(rate: number): number[] {
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
