import { Component } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm: string = '';
  searchResult: any[] = [];

  constructor(private searchService: SearchService) {}

  onSearch() {
    if (this.searchTerm != '') {
      this.searchService
        .searchPlaces(this.searchTerm, 3, 1, undefined)
        .subscribe((result) => {
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
}
