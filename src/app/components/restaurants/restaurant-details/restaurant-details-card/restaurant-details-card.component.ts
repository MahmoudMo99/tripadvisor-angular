import { Component, OnInit } from '@angular/core'; //  Add OnInit


import { Restaurant } from '../../../../models/restaurants/restaurant'; //  Import model
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-restaurant-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-details-card.component.html',
  styleUrl: './restaurant-details-card.component.scss',
})
export class RestaurantDetailsCardComponent implements OnInit {
  restaurant: Restaurant | null = null; //  Use proper type
  parsedHours: { [day: string]: string[] } = {};
  weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  checkIn: string = new Date().toISOString();

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    if (restaurantId) {
      this.getRestaurantData(restaurantId);
    }
  }

  getRestaurantData(id: string): void {
    this.restaurantService.getRestaurantById(id).subscribe(
      (data: Restaurant) => {
        this.restaurant = data;

        if (typeof data.hours === 'object') {
          this.parsedHours = data.hours;
        } else {
          this.weekDays.forEach((day) => (this.parsedHours[day] = ['Closed']));
        }
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }

  onReserve(): void {
    if (this.authService.isAuthenticated()) {
      const restaurantId = this.route.snapshot.paramMap.get('id');
      if (restaurantId && this.restaurant) {
        const booking = {
          type: 'Restaurant',
          reference: restaurantId,
          checkIn: this.checkIn,
          restaurant: this.restaurant,
        };

        this.router.navigate(['/Booking'], {
          state: { booking },
        });
      }
    } else {
      this.router.navigate(['/login']);
    }
    
  }
}
