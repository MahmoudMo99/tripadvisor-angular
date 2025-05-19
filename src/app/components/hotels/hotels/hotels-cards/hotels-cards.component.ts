import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsTemplateComponent } from '../../cards-template/cards-template.component';
import { HotelsCategorizerService } from '../../../../services/hotels/hotels-Categorizer.service';
import { Hotel } from '../../../../models/hotels/Hotel';
import { DestinationsListComponent } from '../destination-groups/destination-groups.component';

@Component({
  selector: 'app-hotels-cards',
  templateUrl: './hotels-cards.component.html',
  styleUrls: ['./hotels-cards.component.css'],
  standalone: true,
  imports: [CardsTemplateComponent, CommonModule, DestinationsListComponent]
})
export class HotelsCardsComponent implements OnInit {
  hotels: Hotel[] = [];
  recommendedHotels: Hotel[] = [];
  topHotels: Hotel[] = [];
  topExperiencesWorldwide: Hotel[] = [];
  topGlobalHotels: Hotel[] = [];

  constructor(private hotelsCategorizerService: HotelsCategorizerService) {}

  ngOnInit(): void {
    this.loadCategorizedHotels();
  }

  private loadCategorizedHotels(): void {
    this.hotelsCategorizerService.getCategorizedHotels().subscribe({
      next: (result) => {
        this.hotels = result.hotels;
        this.recommendedHotels = result.recommendedHotels;
        this.topHotels = result.topHotels;
        this.topExperiencesWorldwide = result.topExperiencesWorldwide;
        this.topGlobalHotels = result.topGlobalHotels;
      },
      error: (err) => console.error('Error fetching categorized hotels:', err)
    });
  }

  goToDetails(id: string): void {
    console.log('Navigating to:', id);
  }
}
