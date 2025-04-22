import { Component } from '@angular/core';
import { RestaurantDetailsCardComponent } from "../restaurant-details-card/restaurant-details-card.component";
import { RestaurantDetailsOverviewComponent } from "../restaurant-details-overview/restaurant-details-overview.component";
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-restaurant-details-nav',
  imports: [RestaurantDetailsCardComponent, RestaurantDetailsOverviewComponent, MapComponent],
  templateUrl: './restaurant-details-nav.component.html',
  styleUrl: './restaurant-details-nav.component.scss'
})
export class RestaurantDetailsNavComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
