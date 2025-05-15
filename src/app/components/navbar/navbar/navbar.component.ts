import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { NavListsComponent } from '../nav-lists/nav-lists.component';
import { LanguageNavbarService } from '../../../shared/language-navbar.service';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    SearchBarComponent,
    MobileMenuComponent,
    NavListsComponent,
    RouterModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isUserLogged: boolean = false;
  isDropdownOpen = false;
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onMenuItemClick() {
    this.isDropdownOpen = false;
  }
  constructor(
    private langService: LanguageNavbarService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.updateLoggedStatus();
  }

  openLangModal() {
    this.langService.triggerModal();
  }

  updateLoggedStatus() {
    this.authService.isLoggedIn$.subscribe(
      (status) => (this.isUserLogged = status)
    );
  }
  logout(): void {
    this.isDropdownOpen = false;

    this.authService.logout();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.dropdownRef && !this.dropdownRef.nativeElement.contains(target)) {
      this.isDropdownOpen = false;
    }
  }
}
