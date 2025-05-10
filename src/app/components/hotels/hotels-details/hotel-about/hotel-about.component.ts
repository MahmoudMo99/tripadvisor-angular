import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { Hotel } from '../../../../models/hotels/Hotel';

@Component({
  selector: 'app-hotel-about',
  templateUrl: './hotel-about.component.html',
  styleUrls: ['./hotel-about.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class HotelAboutComponent {
  showFullDesc = false;
  hotelId!: string;
  hotel!: Hotel | undefined;
  ratings: { label: string; value: number }[] = [];

  amenities = {
    property: [] as any[],
    features: [] as any[],
    types: [] as any[]
  };

  shortDescription = ``;
  fullDescription = ``;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.hotelId = params.get('id') || '';
      if (this.hotelId) {
        this.loadHotel(this.hotelId);
      }
    });
  }

  private loadHotel(id: string): void {
    this.hotelService.getHotelById(id).subscribe(
      (hotel: Hotel) => {
        this.hotel = hotel;
this.hotel = hotel;

this.shortDescription = hotel.description || '';
this.fullDescription = hotel.longDescription || this.shortDescription;

        if (hotel.scoreDetails) {
          this.ratings = Object.entries(hotel.scoreDetails)
            .filter(([_, value]) => value != null)
            .map(([label, value]) => ({
              label,
              value: Number(value),
            }));
        }

      this.amenities = {
  property: (hotel.groupedAmenities?.propertyAmenities || []).slice(0, 8),
  features: (hotel.groupedAmenities?.roomFeatures || []).slice(0, 8),
  types: (hotel.groupedAmenities?.roomTypes || []).slice(0, 8)
};

      },
      (error) => {
        console.error('Error fetching hotel:', error);
      }
    );
  }
}
