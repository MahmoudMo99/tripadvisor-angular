import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
// import { UserMenuComponent } from "../user-menu/user-menu.component";
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { NavListsComponent } from "../nav-lists/nav-lists.component";
import { LanguageNavbarService } from '../../../shared/language-navbar.service';


@Component({
  selector: 'app-navbar',
  imports: [SearchBarComponent, MobileMenuComponent, NavListsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private langService: LanguageNavbarService) {}
  openLangModal() {
    this.langService.triggerModal(); 
  }
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
