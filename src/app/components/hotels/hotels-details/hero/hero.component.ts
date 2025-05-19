import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttractionService } from '../../../../services/attractive/attraction.service';
import { ICards } from '../../../../models/attractions/i-cards';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../../../services/hotel.service';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { Hotel } from '../../../../models/hotels/Hotel';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports:[CommonModule]
})
export class HeroComponent implements OnInit {
  hotelId!: string;
  hotel!: Hotel | undefined;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get('id') || '';
      console.log('Route ID:', this.hotelId); 
      if (this.hotelId) {
        this.loadAttraction(this.hotelId);
      }
    });
  }

  private loadAttraction(id: string): void {
    console.log('Loading hotel by ID:', id);

    this.hotelService.getHotelById(id).subscribe(
      (hotel: Hotel) => {
        this.hotel = hotel;
        console.log('hotel loaded:', this.hotel);
      },
      (error) => {
        console.error('Error fetching hotel:', error);
      }
    );
  }

  getImage(index: number): string {
  return this.hotel?.images && this.hotel.images.length > index
    ? this.hotel.images[index]
    : 'assets/images/placeholder.png';
}

}
