import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar-home-page',
  imports: [FormsModule],
  templateUrl: './search-bar-home-page.component.html',
  styleUrl: './search-bar-home-page.component.scss'
})
export class SearchBarHomePageComponent {
  searchQuery: string = '';

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log(this.searchQuery);
      // put api
    }
  }
}
