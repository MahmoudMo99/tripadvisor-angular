import { Component } from '@angular/core';
import { SearchResturantComponent } from '../search-resturant/search-resturant.component';
import { InformationResturantComponent } from '../information-resturant/information-resturant.component';
<<<<<<< HEAD

@Component({
  selector: 'app-resturant-page',
  imports: [SearchResturantComponent,InformationResturantComponent],
=======
import { RecentRestautantComponent } from '../recent-restautant/recent-restautant.component';
import { DinnerRestautantComponent } from '../dinner-restautant/dinner-restautant.component';
import { LaunchRestautantComponent } from '../launch-restautant/launch-restautant.component';
import { BreackfastRestautantComponent } from '../breackfast-restautant/breackfast-restautant.component';
import { RestaurantDetailsConnectionComponent } from '../restaurant-details/restaurant-details-connection/restaurant-details-connection.component';
import { RestaurantDetailsCardComponent } from '../restaurant-details/restaurant-details-card/restaurant-details-card.component';

@Component({
  selector: 'app-resturant-page',
  imports: [SearchResturantComponent,InformationResturantComponent,RecentRestautantComponent,DinnerRestautantComponent,LaunchRestautantComponent,BreackfastRestautantComponent],
>>>>>>> 67538c4225ae2d61ad8787e73c712d3a50f588ec
  templateUrl: './resturant-page.component.html',
  styleUrl: './resturant-page.component.scss'
})
export class ResturantPageComponent {

<<<<<<< HEAD
=======

>>>>>>> 67538c4225ae2d61ad8787e73c712d3a50f588ec
}
