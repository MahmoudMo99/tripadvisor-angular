import { ReverseSectionComponent } from './../reverse-section/reverse-section.component';
import { MiddleSectionComponent } from './../middle-section.component';
import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { ICards } from '../../../../../models/attractions/i-cards';
import { ActivatedRoute } from '@angular/router';
import { AttractionService } from '../../../../../services/attractive/attraction.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
  imports:[ ReverseSectionComponent, AccordionComponent,CommonModule]
})
export class AboutSectionComponent implements OnInit {

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


}
