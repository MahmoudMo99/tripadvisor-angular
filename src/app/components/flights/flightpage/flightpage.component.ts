import { Component } from '@angular/core';
import { FlightSearchComponent } from "../flight-search/flight-search.component";
import { FlightReviewComponent } from "../flight-review/flight-review.component";
import { PopularDestnationComponent } from "../popular-destnation/popular-destnation.component";

@Component({
  selector: 'app-flightpage',
  imports: [FlightSearchComponent, FlightReviewComponent, PopularDestnationComponent],
  templateUrl: './flightpage.component.html',
  styleUrl: './flightpage.component.scss'
})
export class FlightpageComponent {

}
