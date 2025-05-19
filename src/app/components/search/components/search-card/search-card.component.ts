import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReviewRateComponent } from '../../../reviews/review-form/review-rate/review-rate.component';

@Component({
  selector: 'app-search-card',
  imports: [ReviewRateComponent, NgClass],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.scss'
})
export class SearchCardComponent {
  @Input() item: any;
  screenSize: String = window.innerWidth > 992 ? 'lg' : 'sm';

  constructor() {
    console.log(this.item)
  }

  updateScreenSize(): void {
    this.screenSize = window.innerWidth > 992 ? 'lg' : window.innerWidth > 768 ? 'md' : 'sm';
  }

}
