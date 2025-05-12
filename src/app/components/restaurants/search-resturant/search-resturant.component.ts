import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-resturant',
  imports: [FormsModule],
  templateUrl: './search-resturant.component.html',
  styleUrl: './search-resturant.component.scss',
})
export class SearchResturantComponent {
  searchQuery: string = '';

  searchRestaurants() {
    if (this.searchQuery.trim()) {
      console.log(`Searching for restaurants in: ${this.searchQuery}`);
      // API
    } else {
      alert('Please enter a valid search query.');
    }
  }
}
