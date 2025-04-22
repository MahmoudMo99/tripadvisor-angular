import { Component } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details-header',
  imports: [CommonModule],
  templateUrl: './restaurant-details-header.component.html',
  styleUrl: './restaurant-details-header.component.scss'
})
export class RestaurantDetailsHeaderComponent {
  restaurant: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restaurantService.getRestaurantById(id).subscribe({
        next: (data) => {
          this.restaurant = data
        },
        error: (err) => console.error('Error fetching restaurant:', err)
      });
    }
  }


  createRatingCircles(rank: number = 4.5): boolean[] {
    const rounded = Math.round(rank);
    return Array(5).fill(false).map((_, i) => i < rounded);
  }
}



