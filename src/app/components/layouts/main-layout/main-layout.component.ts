import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterOutlet } from '@angular/router';
// import { ModalLanguageComponent } from '../../../shared/modal-language/modal-language.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    // ModalLanguageComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  showScrollTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
