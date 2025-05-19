import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../../../models/restaurants/restaurant';
// import { MapUrlPipe } from '../../../../pipes/map-url.pipe';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-restaurant-details-overview',
  standalone: true,
  imports: [CommonModule,MapComponent],
  templateUrl: './restaurant-details-overview.component.html',
  styleUrls: ['./restaurant-details-overview.component.scss'],
})
export class RestaurantDetailsOverviewComponent implements OnInit {
  restaurantId!: string;
  restaurant: Restaurant = {
    // location: '',
  location: {
        address: '',
      city: '',
    country: '',
    coordinates: ''
  },
    name: '',
    features: {
      cuisines: [],
      mealTypes: [],
      specialDiets: []
    },
    _id: '',
    destination: '',
    rank: 0,
    rating:0,
    // hours: '',
  hours: {},
    website: '',
    phone: '',
    // reviewsCount: 0,
    numberOfReviews: 0,
    images: {
      restaurantImages: [],
      menuImages: [],
      interiorImages: []
    },
    menu: [],
    createdAt: '',
    updatedAt: '',
    __v: 0
  };  googleMapUrl: string = '';

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.restaurantId = id;
        this.loadRestaurantData();
      }
    });
  }

  // loadRestaurantData(): void {
  //   this.restaurantService.getRestaurantById(this.restaurantId).subscribe((data) => {
  //     this.restaurant = data;
  //     const coords = this.extractCoords(this.restaurant.location);
  //     if (coords) {
  //       const [lat, lng] = coords;
  //       this.googleMapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${lat},${lng}&zoom=16`;
  //     }
  //   });
  // }





  // loadRestaurantData(): void {
  //   this.restaurantService.getRestaurantById(this.restaurantId).subscribe((data) => {
  //     if (data) {
  //       this.restaurant = data;

  //       this.restaurant.features = this.restaurant.features || {
  //         cuisines: [],
  //         mealTypes: [],
  //         specialDiets: []
  //       };

  //       const coords = this.extractCoords(this.restaurant.location);
  //       if (coords) {
  //         const [lat, lng] = coords;

  //       this.googleMapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${lat},${lng}&zoom=16`;
  //       console.log('Map URL', this.googleMapUrl);

  //     }
  //     } else {
  //       console.error('No restaurant data found!');
  //     }
  //   });
  // }

loadRestaurantData(): void {
  this.restaurantService.getRestaurantById(this.restaurantId).subscribe((data) => {
    if (data) {
      this.restaurant = data;

      this.restaurant.features = this.restaurant.features || {
        cuisines: [],
        mealTypes: [],
        specialDiets: []
      };

      const coords = this.extractCoords(this.restaurant.location.coordinates);
      if (coords) {
        const [lat, lng] = coords;
        this.googleMapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${lat},${lng}&zoom=16`;
      } else {
        this.googleMapUrl = '';
        console.warn('No coordinates found in location.coordinates.');
      }
    } else {
      console.error('No restaurant data found!');
    }
  });
}



  // extractCoords(location: string): [string, string] | null {
  //   const match = location.match(/@([0-9\.\-]+),([0-9\.\-]+)/);
  //   return match ? [match[1], match[2]] : null;
  // }
extractCoords(coordinates?: string): [string, string] | null {
  if (!coordinates) return null;
  const match = coordinates.match(/@?([0-9.\-]+),([0-9.\-]+)/);
  return match ? [match[1], match[2]] : null;
}

  get features() {
    return this.restaurant?.features;
  }
}




