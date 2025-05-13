import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-photo',
  imports: [FormsModule],
  templateUrl: './post-photo.component.html',
  styleUrl: './post-photo.component.scss'
})
export class PostPhotoComponent {
  searchTerm: string = '';
  onSearch() { }
}
