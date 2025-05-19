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
      console.log(data);

      this.recentlyRestaurant = data.map((rest: any) => ({
            title: rest.name,
            image:
              rest.images?.restaurantImages?.[0] || 'assets/default-image.jpg',
            link: `/restaurants/${rest._id}`,
            rate: rest.rating || 0,
            reviews: rest.numberOfReviews || 0,
          }));
    },
    (error) => {
      console.error('Error fetching rest', error);
    }
  );
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
  scrollToLeft() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = document.getElementById('scroll-container-3');
    if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
