import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutSectionComponent } from '../middle-section/about-section/about-section.component';
import { CardsComponent } from '../cards/cards.component';
import { ReviewsComponent } from "../../../reviews/reviews/reviews.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attractions-details',
  templateUrl: './attractions-details.component.html',
  styleUrls: ['./attractions-details.component.css'],
  imports: [HeroComponent, AboutSectionComponent, CardsComponent, ReviewsComponent]
})
export class AttractionsDetailsComponent implements OnInit {
  id: string= '';
  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      console.log('Route ID:', this.id);
    });
  }

  ngOnInit() {
  }

}
