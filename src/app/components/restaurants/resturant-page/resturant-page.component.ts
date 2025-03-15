import { Component } from '@angular/core';
import { SearchResturantComponent } from '../search-resturant/search-resturant.component';
import { InformationResturantComponent } from '../information-resturant/information-resturant.component';

@Component({
  selector: 'app-resturant-page',
  imports: [SearchResturantComponent,InformationResturantComponent],
  templateUrl: './resturant-page.component.html',
  styleUrl: './resturant-page.component.scss'
})
export class ResturantPageComponent {

}
