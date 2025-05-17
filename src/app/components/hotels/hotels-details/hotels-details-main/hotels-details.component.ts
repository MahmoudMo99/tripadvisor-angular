import { HotelAboutComponent } from './../hotel-about/hotel-about.component';
import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HotelBookingComponent } from '../Hotel-Booking/hotel-booking.component';
import { FooterComponent } from "../../../footer/footer.component";
import {CardsComponent} from '../cards/cards.component'
import { HotelLocationComponent } from "../hotel-location/hotel-location.component";
import { ReviewsComponent } from '../../../reviews/reviews/reviews.component';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.css'],
  imports: [HeroComponent, HotelBookingComponent, HotelAboutComponent, CardsComponent, HotelLocationComponent,ReviewsComponent]
})
export class HotelsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hellllllllllloooooooooooo');
    
  }

}
