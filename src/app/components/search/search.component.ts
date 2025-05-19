import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReviewRateComponent } from '../reviews/review-form/review-rate/review-rate.component';
import { SearchService } from '../../services/search.service';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchCardComponent } from './components/search-card/search-card.component';

@Component({
  selector: 'app-search',
  imports: [NgClass, FormsModule, SearchCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchValue =
    new URL(window.location.href).searchParams.get('searchValue') || '';
  searchResult: any[] = [];
  screenSize: String = window.innerWidth > 992 ? 'lg' : 'sm';
  selectedFilter: number = 0;

  constructor(private searchService: SearchService) {
    window.addEventListener('resize', this.updateScreenSize.bind(this));
    this.searchPlaces();
  }

  updateScreenSize(): void {
    this.screenSize =
      window.innerWidth > 992 ? 'lg' : window.innerWidth > 768 ? 'md' : 'sm';
  }

  filterOptions: string[] = [
    'All Results',
    'Hotels',
    'Restaurants',
    'Things to Do',
  ];

  searchPlaces() {
    this.searchService
      .searchPlaces(this.searchValue, 10, 1, this.placeType())
      .subscribe((result) => {
        this.searchResult = result;
        console.log(this.searchResult);
      });
  }

  placeType() {
    enum PlaceType {
      hotel = 1,
      restaurant = 2,
      attractive = 3,
    }
    return PlaceType[this.selectedFilter];
  }
  setSelectedFilter(index: number) {
    this.selectedFilter = index;
    this.searchPlaces();
  }
}
