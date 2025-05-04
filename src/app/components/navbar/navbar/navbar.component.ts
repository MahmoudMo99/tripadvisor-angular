import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
// import { UserMenuComponent } from "../user-menu/user-menu.component";
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { NavListsComponent } from "../nav-lists/nav-lists.component";


@Component({
  selector: 'app-navbar',
  imports: [SearchBarComponent, MobileMenuComponent, NavListsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDropdownOpen = false;
  menuItems = [
    'Trips',
    'Write a review',
    'Profile',
    'Bookings',
    'Messages',
    'Account info',
    'Sign out',
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
