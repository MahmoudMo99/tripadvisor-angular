import { Component, OnInit } from '@angular/core';
// import { NavbarComponent } from '../../../navbar/navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FeatureComponent } from '../feature/feature.component';
// import { FooterComponent } from '../../../footer/footer.component';
// import { CardsComponent } from "../../attractions-details/cards/cards.component";
// import { CardsTemplateComponent } from "../../cards-template/cards-template.component";
import { AttractionsCardsComponent } from "../attractions-cards/attractions-cards.component";

@Component({
  selector: 'app-attractions',
  imports: [HeroComponent, FeatureComponent, AttractionsCardsComponent],
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css'],
})
export class AttractionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
