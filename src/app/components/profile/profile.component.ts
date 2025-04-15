import { Component } from '@angular/core';
import { FeedComponent } from './components/feed/feed.component';
import { CommonModule, NgClass } from '@angular/common';
import { TripComponent } from "./components/trip/trip.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FeedComponent, NgClass, TripComponent, PhotosComponent, ReviewsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  screenSize: string = window.innerWidth > 992?'lg': 'sm';
  // nav
  navItems = [
    {name:'Activity feed', Component: FeedComponent},
    {name:'Trip', Component: TripComponent},
    {name:'Photo', Component: PhotosComponent},
    {name:'Reviews', Component: ReviewsComponent},
    {name:'Booking', Component: ReviewsComponent},
    {name:'Travel map', Component: FeedComponent}
  ];
  currentMainIndex = 0;

  // 


  constructor(){}


  // nav
  changeMain(index: any){
   this.currentMainIndex = index;
  }
}
