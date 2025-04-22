import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { FooterComponent } from '../../../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutSectionComponent } from '../middle-section/about-section/about-section.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-attractions-details',
  templateUrl: './attractions-details.component.html',
  styleUrls: ['./attractions-details.component.css'],
  imports:[NavbarComponent,HeroComponent,FooterComponent, AboutSectionComponent, CardsComponent]
})
export class AttractionsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
