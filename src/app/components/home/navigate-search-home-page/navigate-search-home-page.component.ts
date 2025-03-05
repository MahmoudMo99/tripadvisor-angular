import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigate-search-home-page',
  imports: [CommonModule,RouterModule],
  templateUrl: './navigate-search-home-page.component.html',
  styleUrl: './navigate-search-home-page.component.scss'
})
export class NavigateSearchHomePageComponent {
  navItems = [
    { label: 'Search All', icon: 'bi-search', type: 'button', link: '', isButton: true },
    { label: 'Hotels', icon: 'bi-building', type: 'link', link: '/hotels', isButton: false },
    { label: 'Things to Do', icon: 'bi-star', type: 'link', link: '/things-to-do', isButton: false },
    { label: 'Restaurants', icon: 'bi-cup-straw', type: 'link', link: '/restaurants', isButton: false },
    { label: 'Flights', icon: 'bi-airplane', type: 'link', link: '/flights', isButton: false },
    { label: 'Vacation Rentals', icon: 'bi-house-door', type: 'link', link: '/vacation-rentals', isButton: false },
  ];
}
