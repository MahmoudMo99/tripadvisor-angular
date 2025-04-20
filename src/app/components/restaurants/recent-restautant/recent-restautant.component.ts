import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recent-restautant',
  imports: [CommonModule,RouterLink],
  templateUrl: './recent-restautant.component.html',
  styleUrl: './recent-restautant.component.scss'
})
export class RecentRestautantComponent {
  recentlyRestaurant: any[] = [];
  constructor(private restaurant:RestaurantService) {}
  ngOnInit() {
    this.fetchRestaurant();
  }

  fetchRestaurant() {
    this.restaurant.getRecentlyRestaurant().subscribe(
      (data) => {
        this.recentlyRestaurant = data.map((rest: any) => ({
          title: rest.name,
          image: rest.images?.[0] || 'assets/default-image.jpg',
          link: `/rest/${rest.id}`,
          rate: rest.rating || 0,
          reviews: rest.reviewsCount || 0,
        }));
      },
      (error) => {
        console.error('Error fetching rest', error);
      }
    );
  }

  // createRatingArray(rate: number): boolean[] {
  //   const max = 5;
  //   const full = Math.round(rate);
  //   return Array.from({ length: max }, (_, i) => i < full);
  // }

  createArray(rate: number): number[] {
    return new Array(Math.round(rate)).fill(0);
  }
  scrollToLeft() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
