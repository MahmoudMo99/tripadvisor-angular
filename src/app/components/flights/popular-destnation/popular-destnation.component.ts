import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-destnation',
  imports: [CommonModule],
  templateUrl: './popular-destnation.component.html',
  styleUrl: './popular-destnation.component.scss'
})
export class PopularDestnationComponent {
  destinations = [
    {
      title: "Get the best deals",
      description: "Compare flight prices from hundreds of airlines and travel sites in one place.",
      image: "/assets/image.png"
    },
    {
      title: "Get the best deals",
      description: "Compare flight prices from hundreds of airlines and travel sites in one place.",
      image: "/assets/image.png"
    },
    {
      title: "Get the best deals",
      description: "Compare flight prices from hundreds of airlines and travel sites in one place.",
      image: "/assets/image.png"
    }
  ];
  flightDeals = Array(4).fill({
    title: "Best Flight Deals",
    description: "No need to shop multiple sites any more. We've already done that by searching hundreds of cheap flights for you– scouring premium airlines, low-cost carriers and the biggest online travel agencies for the best deals. We'll even check alternate dates and nearby airports to help you save money, time, even sanity on airline tickets."
  });

}
