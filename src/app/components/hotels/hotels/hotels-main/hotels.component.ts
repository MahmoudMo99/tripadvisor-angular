import { Component, OnInit } from '@angular/core';
// import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
// import { FooterComponent } from '../../../footer/footer.component';
// import { CardsComponent } from "../../attractions-details/cards/cards.component";
// import { CardsTemplateComponent } from "../../cards-template/cards-template.component";
import { HotelsCardsComponent } from "../hotels-cards/hotels-cards.component";

@Component({
  selector: 'app-hotels',
  imports: [HeroComponent, HotelsCardsComponent],
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
