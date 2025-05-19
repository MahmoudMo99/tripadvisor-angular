import { Component, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trends-home-page',
  imports: [CommonModule],
  templateUrl: './trends-home-page.component.html',
  styleUrl: './trends-home-page.component.scss'
})
export class TrendsHomePageComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() trends: any[] = [];
  @Input() containerId: string = 'scroll-container';


  constructor(private trendcastService: HomeService, private router: Router) {}

  // ngOnInit() {
  //   this.fetchTrendingDestinations();
  // }

  // fetchTrendingDestinations() {
  //   this.trendcastService.getDestination()
  //     .subscribe(data => {
  //       this.trends = data.map(dest => ({
  //         title: dest.name,
  //         country:dest.country,
  //         image: dest.images[0],
  //       }));
  //     }, error => {
  //       console.error('Error fetching trending destinations:', error);
  //     });
  // }
  ngOnInit() {
    this.fetchTrendingRestaurants();
  }

  fetchTrendingRestaurants() {
    this.trendcastService.getRestaurants().subscribe({
      next: (data) => {
        console.log('Fetched restaurants:', data); // optional logging
        this.trends = data.map(restaurant => ({
          id: restaurant._id,
          title: restaurant.name,
          country: restaurant.location?.country || 'Unknown',
          image: restaurant.images?.restaurantImages?.[0] || 'assets/default.jpg',
          rating: restaurant.rating,
          reviews: restaurant.numberOfReviews,
        }));
      },
      error: (error) => {
        console.error('Error fetching restaurants:', error);
      }
    });
  }
  scrollToLeft(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error("Scroll container not found!");
      return;
    }
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error("Scroll container not found!");
      return;
    }
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }


    onCardClick(trend: any) {
      console.log('Clicked card:', trend);
    // this.router.navigate(['/app-restaurant-details-connection', trend.id]);

    if (!trend.id) {
    console.error('Missing ID in trend:', trend);
    return;
  }

  this.router.navigate(['/restaurants', trend.id]);
  }

}
