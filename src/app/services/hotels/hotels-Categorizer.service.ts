import { Injectable } from '@angular/core';
import { HotelsService } from './hotels.service';
import { Observable, map } from 'rxjs';
import { Hotel } from '../../models/hotels/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsCategorizerService {
  constructor(private hotelsService: HotelsService) {}

  getCategorizedHotels(): Observable<{
    hotels: Hotel[];
    recommendedHotels: Hotel[];
    topHotels: Hotel[];
    topExperiencesWorldwide: Hotel[];
    topGlobalHotels: Hotel[];
  }> {
    return this.hotelsService.getHotels().pipe(
      map((hotels: Hotel[]) => {
        const sortedHotels = hotels.map(hotel => ({
          ...hotel,
          isRecommended: (hotel.averageRating ?? 0) >= 4.5 && (hotel.totalReviews ?? 0) > 500,
          isGlobal: ['Paris', 'New York', 'London', 'Dubai', 'Tokyo'].some(city =>
            (hotel.address ?? '').toLowerCase().includes(city.toLowerCase())
          ),
          isTop: (hotel.ranking?.position ?? 9999) <= 10
        }));

        return {
          hotels: sortedHotels,
          recommendedHotels: sortedHotels
            .filter(h => h.isRecommended)
            .sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0)),
          topHotels: sortedHotels
            .filter(h => h.isTop)
            .sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0)),
          topExperiencesWorldwide: sortedHotels
            .filter(h => (h.totalReviews ?? 0) > 20000)
            .sort((a, b) => (b.totalReviews ?? 0) - (a.totalReviews ?? 0)),
          topGlobalHotels: sortedHotels
            .filter(h => h.isGlobal)
            .sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0))
        };
      })
    );
  }
}
