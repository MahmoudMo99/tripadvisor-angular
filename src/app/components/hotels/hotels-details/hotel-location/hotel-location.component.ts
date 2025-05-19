import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { Hotel } from '../../../../models/hotels/Hotel';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-location',
  templateUrl: './hotel-location.component.html',
  styleUrls: ['./hotel-location.component.css'],
  imports:[CommonModule]
})
export class HotelLocationComponent implements OnInit {
  stars = Array(5).fill(0);

  restaurants = [
    { name: "Z’asya", rating: 5.0, reviews: 2017, distance: '1 min', price: '$$$$', cuisine: 'Asian' },
    { name: "Cafe Istanbul Restaurant", rating: 4.9, reviews: 915, distance: '2.7 mi', price: '$$', cuisine: 'Steakhouse' }
  ];

  attractions = [
    { name: "Belek Town Mosque", rating: 3.9, reviews: 458, distance: '2.6 mi', type: 'Landmarks' },
    { name: "Belek Beach", rating: 4.2, reviews: 13, distance: '1 mi', type: 'Beaches' }
  ];


    hotelId!: string;
    hotel!: Hotel | undefined;
  
    constructor(
      private route: ActivatedRoute,
      private hotelService: HotelsService
    ) {}
  
 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.hotelId = params.get('id') || '';
    if (this.hotelId) {
      this.loadAttraction(this.hotelId);
    }
  });
}
private loadAttraction(id: string): void {
  this.hotelService.getHotelById(id).subscribe(
    (hotel: Hotel) => {
      this.hotel = hotel;
      console.log('hotel loaded:', this.hotel);

      setTimeout(() => {
        this.loadLeafletMap();
      }, 0);
    },
    (error) => {
      console.error('Error fetching hotel:', error);
    }
  );
}

  
 

  loadLeafletMap(): void {
    
    const map = L.map('map').setView([36.8550, 31.0356], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([36.8550, 31.0356]).addTo(map);
    marker.bindPopup(`<strong>${this.hotel?.name}</strong><br>${this.hotel?.averageRating} ⭐ (${this.hotel?.totalReviews } reviews)`).openPopup();
  }
}
