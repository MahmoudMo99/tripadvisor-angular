import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  menuItems = [
    'Write a review',
    'Trips',
    "Travelers' Choice",
    'Travel Stories',
    'Hotels',
    'Things to Do',
    'Restaurants',
    'Flights',
    'Vacation Rentals',
    'Cruises',
    'Rental Cars',
    'Forums',
    'Post photos',
    'Add a place',
  ];
}
