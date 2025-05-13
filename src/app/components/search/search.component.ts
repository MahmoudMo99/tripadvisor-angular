import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReviewRateComponent } from "../reviews/review-form/review-rate/review-rate.component";

@Component({
  selector: 'app-search',
  imports: [NgClass, ReviewRateComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  screenSize: String = window.innerWidth > 992 ? 'lg' : 'sm';

  constructor() {
    window.addEventListener('resize', this.updateScreenSize.bind(this));
  }

  updateScreenSize(): void {
    this.screenSize = window.innerWidth > 992 ? 'lg' : window.innerWidth > 768 ? 'md' : 'sm';
  }
  filterOptions: string[] = [
    'All Results',
    'Hotels',
    'Restaurants',
    'Things to Do',
    'Destinations'
  ];

}
