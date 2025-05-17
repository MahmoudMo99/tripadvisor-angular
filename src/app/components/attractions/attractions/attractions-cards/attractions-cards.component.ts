import { Component, OnInit } from '@angular/core';
import { CardsTemplateComponent } from '../../cards-template/cards-template.component';
import { CommonModule } from '@angular/common';
import { ICards } from '../../../../models/attractions/i-cards';
import { AttractionCategorizerService } from '../../../../services/attractive/Attraction-Categorizer.service';

@Component({
  selector: 'app-attractions-cards',
  templateUrl: './attractions-cards.component.html',
  styleUrls: ['./attractions-cards.component.css'],
  standalone: true,
  imports: [CardsTemplateComponent, CommonModule]
})
export class AttractionsCardsComponent implements OnInit {

  attractions: ICards[] = [];
  recommendedAttractions: ICards[] = [];
  topAttractions: ICards[] = [];
  topExperiencesWorldwide: ICards[] = [];
  topGlobalDestinations: ICards[] = [];
  topGlobalAttractions: ICards[] = [];
  topExperiencesByDestination: Record<string, ICards[]> = {};

  constructor(private attractionCategorizerService: AttractionCategorizerService) {}

  ngOnInit(): void {
    this.loadCategorizedAttractions();
  }

  private loadCategorizedAttractions(): void {
    this.attractionCategorizerService.getCategorizedAttractions().subscribe(
      (result) => {
        this.attractions = result.attractions;
        this.recommendedAttractions = result.recommendedAttractions;
        this.topAttractions = result.topAttractions;
        this.topExperiencesWorldwide = result.topExperiencesWorldwide;
        this.topGlobalDestinations = result.topGlobalDestinations;
        this.topGlobalAttractions = result.topGlobalAttractions;
        this.topExperiencesByDestination = result.topExperiencesByDestination;

        console.log('Categorized and Sorted Data:', result);
      },
      (error) => {
        console.error('Error fetching categorized attractions:', error);
      }
    );
  }

  goToDetails(id: string): void {
    console.log('Navigating to:', id);
  }
}
