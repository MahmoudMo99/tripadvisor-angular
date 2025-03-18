import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttractionService } from '../../../../services/attractive/attraction.service';
import { ICards } from '../../../../models/attractions/i-cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports:[CommonModule]
})
export class HeroComponent implements OnInit {
  attractionId!: string;
  attraction!: ICards | undefined;

  constructor(
    private route: ActivatedRoute,
    private attractionService: AttractionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.attractionId = params.get('id') || '';
      console.log('Route ID:', this.attractionId); 
      if (this.attractionId) {
        this.loadAttraction(this.attractionId);
      }
    });
  }

  private loadAttraction(id: string): void {
    console.log('Loading attraction by ID:', id);

    this.attractionService.getAttractionById(id).subscribe(
      (attraction: ICards) => {
        this.attraction = attraction;
        console.log('Attraction loaded:', this.attraction);
      },
      (error) => {
        console.error('Error fetching attraction:', error);
      }
    );
  }

  getImage(index: number): string {
  return this.attraction?.images && this.attraction.images.length > index
    ? this.attraction.images[index]
    : 'assets/images/placeholder.png';
}

}
