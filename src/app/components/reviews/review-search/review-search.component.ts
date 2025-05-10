import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-search',
  imports: [FormsModule],
  templateUrl: './review-search.component.html',
  styleUrl: './review-search.component.scss'
})
export class ReviewSearchComponent {
  searchTerm: string = '';
  onSearch() { }
}
