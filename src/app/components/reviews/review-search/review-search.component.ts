import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-review-search',
  imports: [FormsModule],
  templateUrl: './review-search.component.html',
  styleUrl: './review-search.component.scss'
})
export class ReviewSearchComponent {
  searchTerm: string = '';
  searchResult: any[] = [];

  constructor(private searchService: SearchService) {

  }
  onSearch() {
    if (this.searchTerm != '') {
      this.searchService.searchPlaces(this.searchTerm, 5, 1, undefined).subscribe(result => {
        this.searchResult = result;
        console.log(this.searchResult);
      });
    }
    this.clearSearchResult();
  }
  clearSearchResult() {
    if (!this.searchTerm.trim()) {
      this.searchResult = [];
    }
  }
  navigateToReviewForm(type: string, reference: string) {
    console.log('say hi ');
    window.location.assign(`/review-form/${type}/${reference}`);
  }
}
