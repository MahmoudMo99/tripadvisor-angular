import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchQuery: string = '';

  // constructor(private searchService : SearchService) {}

  onSearchInput(event: Event) {
    // Handle the search logic here
    console.log('Searching for:', this.searchQuery);
  }

  clearSearch() {
    this.searchQuery = '';
  }
}
