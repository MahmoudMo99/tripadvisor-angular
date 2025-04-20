import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-breackfast-restautant',
  imports: [RouterLink,CommonModule],
  templateUrl: './breackfast-restautant.component.html',
  styleUrl: './breackfast-restautant.component.scss'
})
export class BreackfastRestautantComponent {
breackfastkMeal: any[] = [];

  constructor(private breackfastRestaurant:RestaurantService) {}
  ngOnInit(): void {
    this.breackfastRestaurant.getRecentlyRestaurant().subscribe(restaurants => {
      this.breackfastkMeal = restaurants.filter(rest =>
        rest.features?.mealTypes?.includes('Breakfast')
      );
    });
  }

  createRatingArray(rating: number): any[] {
    return new Array(rating);
  }
}
