import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  imports: [],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  menuItems = [
    'Trips',
    'Write a review',
    'Profile',
    'Bookings',
    'Messages',
    'Account info',
    'Sign out',
  ];
}
