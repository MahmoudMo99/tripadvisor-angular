import { AfterViewInit, Component, OnInit, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { AttractionService } from '../../../../services/attractive/attraction.service';
import { AttractionCategorizerService } from '../../../../services/attractive/Attraction-Categorizer.service';
import { CardsTemplateComponent } from "../../cards-template/cards-template.component";
import { CommonModule } from '@angular/common';
import { ICards } from '../../../../models/attractions/i-cards';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  imports: [CardsTemplateComponent, CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class CardsComponent implements AfterViewInit, OnInit {
  @ViewChild('slider') slider!: ElementRef;

  attractions: ICards[] = [];
  recommendedAttractions: ICards[] = [];
  topAttractions: ICards[] = [];
  topExperiencesByDestination:ICards[]=[];
  topExperiencesWorldwide: ICards[] = [];
  topGlobalDestinations: ICards[] = [];
  topGlobalAttractions: ICards[] = [];

  attractionId!: string;
  attraction!: ICards | undefined;

  constructor(
    private attractionService: AttractionService,
    private attractionCategorizerService: AttractionCategorizerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.attractionId = params.get('id') || '';
      if (this.attractionId) {
        this.loadAttraction(this.attractionId);
      }
    });

    this.loadCategorizedAttractions();
  }

  ngAfterViewInit(): void {
    this.attractionService.initializeSlider(this.slider, 'card');
  }

  private loadCategorizedAttractions(): void {
    this.attractionCategorizerService.getCategorizedAttractions().subscribe(
      (result) => {
        this.attractions = result.attractions;
        this.recommendedAttractions = result.recommendedAttractions;
        this.topAttractions = result.topAttractions;
        this.topExperiencesByDestination = result.topExperiencesByDestination;
        this.topExperiencesWorldwide = result.topExperiencesWorldwide;
        this.topGlobalDestinations = result.topGlobalDestinations;
        this.topGlobalAttractions = result.topGlobalAttractions;

        console.log('Categorized and Sorted Data:', result);
      },
      (error) => {
        console.error('Error fetching categorized attractions:', error);
      }
    );
  }

  private loadAttraction(id: string): void {
    this.attractionService.getAttractionById(id).subscribe(
      (attraction: ICards) => {
        this.attraction = attraction;
      },
      (error) => {
        console.error('Error fetching attraction:', error);
      }
    );
  }

  next(): void {
    this.attractionService.next(this.slider);
  }

  prev(): void {
    this.attractionService.prev(this.slider);
  }

  goToDetails(id: string): void {
    console.log('Navigating to:', id);
  }
}
