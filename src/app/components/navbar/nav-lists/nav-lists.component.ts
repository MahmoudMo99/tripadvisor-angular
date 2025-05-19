import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-lists',
  imports: [RouterLink],
  templateUrl: './nav-lists.component.html',
  styleUrl: './nav-lists.component.scss',
})
export class NavListsComponent {
  navItems = [
    { label: 'Hotels', path: '/hotels' },
    { label: 'Things to Do', path: '/attractions' },
    { label: 'Restaurants', path: '/restaurants' },
    { label: 'Flights', path: '/flights' },
  ];
}
