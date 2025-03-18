import { Injectable } from '@angular/core';
import { AttractionService } from './attraction.service'; 
import { Observable, map } from 'rxjs';
import { ICards } from '../../models/attractions/i-cards';

@Injectable({
  providedIn: 'root'
})
export class AttractionCategorizerService {

  constructor(private attractionService: AttractionService) {}

  getCategorizedAttractions(): Observable<{
    attractions: ICards[],
    recommendedAttractions: ICards[],
    topAttractions: ICards[],
    topExperiences: ICards[],
    topExperiencesWorldwide: ICards[],
    topGlobalDestinations: ICards[],
    topGlobalAttractions: ICards[]
  }> {
    return this.attractionService.getAttractions().pipe(
      map((response: ICards[]) => {
        const data: ICards[] = Array.isArray(response) ? response : [];

        const attractions = data.map(attraction => ({
          ...attraction,
          isRecommended: attraction.rating >= 4.5 && attraction.reviewsCount > 100000,
          isGlobalDestination: ['Paris', 'New York', 'London', 'Dubai', 'Tokyo'].includes(attraction.location || ''),
          isGlobalAttraction: (attraction.rank ?? 9999) <= 20 && attraction.reviewsCount > 2000
        }));

        return {
          attractions,
          recommendedAttractions: attractions
            .filter(a => a.isRecommended)
            .sort((a, b) => b.rating - a.rating),

          topAttractions: attractions
            .filter(a => a.location === 'Paris' && a.rating >= 4.5)
            .sort((a, b) => b.rating - a.rating),

          topExperiences: attractions
            .filter(a => a.location === 'Paris' && a.reviewsCount > 100000)
            .sort((a, b) => b.reviewsCount - a.reviewsCount)
            .slice(0, 10),

          topExperiencesWorldwide: attractions
            .filter(a => a.reviewsCount > 100000)
            .sort((a, b) => b.reviewsCount - a.reviewsCount),

          topGlobalDestinations: attractions
            .filter(a => a.isGlobalDestination)
            .sort((a, b) => b.rating - a.rating),

          topGlobalAttractions: attractions
            .filter(a => a.isGlobalAttraction)
            .sort((a, b) => b.rating - a.rating)
        };
      })
    );
  }
}
