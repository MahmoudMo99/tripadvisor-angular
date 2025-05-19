import { Injectable } from '@angular/core';
import { AttractionService } from './attraction.service';
import { Observable, map } from 'rxjs';
import { ICards } from '../../models/attractions/i-cards';

interface CategorizedAttractions {
  attractions: ICards[];
  recommendedAttractions: ICards[];
  topAttractions: ICards[];
  topExperiencesWorldwide: ICards[];
  topGlobalDestinations: ICards[];
  topGlobalAttractions: ICards[];
  topExperiencesByDestination: ICards[];
}

@Injectable({
  providedIn: 'root'
})
export class AttractionCategorizerService {

  private GLOBAL_DESTINATIONS = ['Paris', 'New York', 'London', 'Dubai', 'Tokyo'];

  constructor(private attractionService: AttractionService) {}

  getCategorizedAttractions(): Observable<CategorizedAttractions> {
    return this.attractionService.getAttractions().pipe(
      map((data: ICards[] = []) => {
        const attractions = data.map(attraction => {
          const destinationName = attraction.destination?.name?.toLowerCase().trim() ?? '';
          const isRecommended = attraction.rating >= 4.5 && attraction.reviewsCount > 100;
          const isGlobalDestination = this.GLOBAL_DESTINATIONS.map(d => d.toLowerCase()).includes(destinationName);
          const isGlobalAttraction = (attraction.rank ?? 9999) <= 10 && attraction.reviewsCount > 1000;

          return {
            ...attraction,
            isRecommended,
            isGlobalDestination,
            isGlobalAttraction
          };
        });

        // const topExperiencesByDestination = attractions.reduce((acc, attraction) => {
        //   const destination = attraction.destination?.name?.trim();
        //   if (!destination || attraction.reviewsCount < 50) return acc;

        //   if (!acc[destination]) acc[destination] = [];
        //   acc[destination].push(attraction);
        //   acc[destination] = acc[destination]
        //     .sort((a, b) => b.reviewsCount - a.reviewsCount)
        //     .slice(0, 10);
        //   return acc;
        // }, {} as Record<string, ICards[]>);

        return {
          attractions,

          recommendedAttractions: attractions
            .filter(a => a.isRecommended)
            .sort((a, b) => b.rating - a.rating),

          topAttractions: attractions
            .filter(a => (a.price ?? 0) >= 300 )
            .sort((a, b) => b.rating - a.rating),

          topExperiencesWorldwide: attractions
            .filter(a => a.reviewsCount > 50000)
            .sort((a, b) => b.reviewsCount - a.reviewsCount),

          topGlobalDestinations: attractions
            .filter(a => a.rating>=4.9 && a.reviewsCount > 100000)
            .sort((a, b) => b.rating - a.rating),

          topGlobalAttractions: attractions
            .filter(a => a.isGlobalAttraction)
            .sort((a, b) => b.rating - a.rating),

            topExperiencesByDestination: attractions
            .filter(h => (h.reviewsCount ?? 0) > 20000)
            .sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0)),        };
      })
    );
  }
}
