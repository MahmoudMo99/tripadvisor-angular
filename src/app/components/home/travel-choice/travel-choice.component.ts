import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-choice',
  imports: [],
  templateUrl: './travel-choice.component.html',
  styleUrl: './travel-choice.component.scss'
})
export class TravelChoiceComponent {
  awardTitle: string = "Travelers' Choice Awards";
  awardSubtitle: string = 'Best of the Best';
  description: string =
    'Among our top 1% of places, stays, eats, and experiences—decided by you.';
  badgeImage: string =
    'https://static.tacdn.com/img2/travelers_choice/2023/TC_badge_yellow.svg';
  awardImage: string = '/assets/tc_cards_2025.png';
  awardLink: string = '/TravelersChoice';
}
