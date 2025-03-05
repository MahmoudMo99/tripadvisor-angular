import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-home-page',
  imports: [CommonModule],
  templateUrl: './nav-bar-home-page.component.html',
  styleUrl: './nav-bar-home-page.component.scss'
})
export class NavBarHomePageComponent {
  navItems: string[] = ['Discover', 'Trips', 'Review'];
  DiscoverItems: string[] = ['traveral choice', 'traveler stories'];
  tripItems: string[] = ['view my trip', 'start new trip', 'create trip using AI'];
  reviewItems: string[] = ['write a review', 'post photo', 'add a place'];
  moreItems: string[] = ['cruises', 'rentals cars', 'forums'];
}
