
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RestaurantService } from '../../../../services/restaurant.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-restaurant-details-card',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './restaurant-details-card.component.html',
//   styleUrl: './restaurant-details-card.component.scss'
// })
// export class RestaurantDetailsCardComponent {
//   restaurant: any = null;
//   parsedHours: { [day: string]: string[] } = {};
//   weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   constructor(
//     private restaurantService: RestaurantService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     const restaurantId = this.route.snapshot.paramMap.get('id')!;
//     this.getRestaurantData(restaurantId);
//   }

//   getRestaurantData(id: string): void {
//     this.restaurantService.getRestaurantById(id).subscribe(
//       (data) => {
//         this.restaurant = data;

//         if (typeof data.hours === 'object') {
//           this.parsedHours = data.hours;
//         } else {
//           this.weekDays.forEach(day => this.parsedHours[day] = ['Closed']);
//         }
//       },
//       (error) => {
//         console.error('Error fetching restaurant data:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core'; // ✅ Add OnInit


import { Restaurant } from '../../../../models/restaurants/restaurant'; // ✅ Import model
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-details-card.component.html',
  styleUrl: './restaurant-details-card.component.scss'
})
export class RestaurantDetailsCardComponent implements OnInit {
  restaurant: Restaurant | null = null; // ✅ Use proper type
  parsedHours: { [day: string]: string[] } = {};
  weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
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
          this.weekDays.forEach(day => this.parsedHours[day] = ['Closed']);
        }
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }
}
