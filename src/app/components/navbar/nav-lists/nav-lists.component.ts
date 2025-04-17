import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-lists',
  imports: [],
  templateUrl: './nav-lists.component.html',
  styleUrl: './nav-lists.component.scss',
})
export class NavListsComponent {
  navItems: string[] = [
    'Hotels',
    'Things to Do',
    'Restaurants',
    'Flights',
    'Vacation Rentals',
    'Cruises',
    'Rental Cars',
    'Forum',
  ];
}
