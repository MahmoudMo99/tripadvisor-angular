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
          console.log(data);

           console.log("Rating data from API:", this.restaurant.rating);
        },
        error: (err) => console.error('Error fetching restaurant:', err)
      });
    }
  }







 getRatingCircles(rating: number = 5): ('full' | 'half' | 'empty')[] {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  return Array.from({ length: 5 }, (_, i) => {
    if (i < fullStars) return 'full';
    if (i === fullStars && hasHalf) return 'half';
    return 'empty';
  });
}
  copyLink(): void {
    const restaurantUrl = window.location.href;
    navigator.clipboard.writeText(restaurantUrl).then(() => {
      alert('Restaurant link copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy link: ', err);
    });
  }

  sendEmail(): void {
    const subject = 'Restaurant Details';
    const body = `Check out this restaurant: ${window.location.href}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

}



