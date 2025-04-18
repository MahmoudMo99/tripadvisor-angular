import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RestaurantService } from '../../../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-details-card.component.html',
  styleUrl: './restaurant-details-card.component.scss',
})
export class RestaurantDetailsCardComponent {
  restaurant: any = null;
  parsedHours: { [day: string]: string[] } = {};
  weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.paramMap.get('id')!;
    this.getRestaurantData(restaurantId);
  }

  getRestaurantData(id: string): void {
    this.restaurantService.getRestaurantById(id).subscribe(
      (data) => {
        this.restaurant = data;
        this.parseHours(this.restaurant.hours);
      },
      (error) => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }

  parseHours(hoursStr: string): void {
    const entries = hoursStr.split(
      /(?=\b(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b)/g
    );
    const dayMap = new Map<string, string[]>();

    for (const entry of entries) {
      const [daysPart, timePartRaw] = entry
        .split(':')
        .map((part) => part.trim());
      if (!timePartRaw) continue;

      const timePart = timePartRaw.replace(/\s+/g, ' '); // normalize spacing

      const addTime = (day: string, time: string) => {
        if (dayMap.has(day)) {
          dayMap.get(day)!.push(time);
        } else {
          dayMap.set(day, [time]);
        }
      };

      if (daysPart.includes('-')) {
        const [startDay, endDay] = daysPart.split('-').map((d) => d.trim());
        const startIndex = this.weekDays.indexOf(startDay);
        const endIndex = this.weekDays.indexOf(endDay);
        for (let i = startIndex; i <= endIndex; i++) {
          addTime(this.weekDays[i], timePart);
        }
      } else {
        addTime(daysPart, timePart);
      }
    }

    // Fill in missing days
    this.weekDays.forEach((day) => {
      this.parsedHours[day] = dayMap.get(day) || ['Closed'];
    });
  }
}
