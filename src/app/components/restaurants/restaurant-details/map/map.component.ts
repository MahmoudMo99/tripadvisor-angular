
// import { Component, AfterViewInit } from '@angular/core';
// import * as L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// L.Icon.Default.mergeOptions({
//   iconUrl: 'assets/leaflet/marker-icon.png',
//   iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
//   shadowUrl: 'assets/leaflet/marker-shadow.png'
// });

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })
// export class MapComponent implements AfterViewInit {
//   ngAfterViewInit(): void {
//     const map = L.map('map').setView([51.505, -0.09], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     L.marker([51.505, -0.09]).addTo(map)
//       .bindPopup('Your restaurant location')
//       .openPopup();
//   }
// }

// import { Component, AfterViewInit } from '@angular/core';
// import * as L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { RestaurantService } from '../../../../services/restaurant.service';
// import { Restaurant } from '../../../../models/restaurants/restaurant';

// L.Icon.Default.mergeOptions({
//   iconUrl: 'assets/leaflet/marker-icon.png',
//   iconRetinaUrl: '/marker-icon-2x.png',
//   shadowUrl: 'assets/leaflet/marker-shadow.png'
// });

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })
// export class MapComponent implements AfterViewInit {
//   constructor(private restaurantService: RestaurantService) {}

//   ngAfterViewInit(): void {
//     this.restaurantService.getRecentlyRestaurant().subscribe(
//       (restaurants: Restaurant[]) => {
//         if (restaurants.length === 0) return;

//         const centerLat = restaurants[0].latitude ?? 0;
//         const centerLng = restaurants[0].longitude ?? 0;
//         const map = L.map('map').setView([centerLat, centerLng], 3);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(map);

//         restaurants.forEach((restaurant) => {
//           const lat = restaurant.latitude ?? 0;
//           const lng = restaurant.longitude ?? 0;

//           if (lat && lng) {
//             L.marker([lat, lng])
//               .addTo(map)
//               .bindPopup(`<strong>${restaurant.name}</strong><br>${restaurant.location}`);
//           }
//         });
//       },
//       (error) => {
//         console.error('Failed to fetch restaurants:', error);
//       }
//     );
//   }
// }










import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RestaurantService } from '../../../../services/restaurant.service';
import { Restaurant } from '../../../../models/restaurants/restaurant';

L.Icon.Default.mergeOptions({
  iconUrl: 'assets/leaflet/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: 'assets/leaflet/marker-shadow.png'
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor(private restaurantService: RestaurantService) {}

  ngAfterViewInit(): void {
    this.restaurantService.getRecentlyRestaurant().subscribe(
      (restaurants: Restaurant[]) => {
        if (!restaurants || restaurants.length === 0) return;

        const restaurant = restaurants[0];

        const lat = restaurant.latitude ?? 0;
        const lng = restaurant.longitude ?? 0;

        const map = L.map('map').setView([lat, lng], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const locationString = restaurant.location
          ? `${restaurant.location.address}, ${restaurant.location.city ?? ''}, ${restaurant.location.country ?? ''}`
          : 'No location available';

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`
            <strong>${restaurant.name}</strong><br>
            ${locationString}<br>
            <small>Lat: ${lat}, Lng: ${lng}</small>
          `)
          .openPopup();
      },
      (error) => {
        console.error('Failed to fetch restaurants:', error);
      }
    );
  }
}
