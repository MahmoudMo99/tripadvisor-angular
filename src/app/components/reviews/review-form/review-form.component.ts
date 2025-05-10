import { Component } from '@angular/core';
import { ReviewRateComponent } from "./review-rate/review-rate.component";

@Component({
  selector: 'app-review-form',
  imports: [ReviewRateComponent],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {

  monthsAndYears: { month: string, year: number }[] = [];
  groupOptions: String[] = [];
  

  constructor() {
      this.monthsAndYears = this.getMonthsAndYears();
      this.groupOptions = ['Business', 'Couples','Family','Friends','Solo','Other'];
    }

  getMonthsAndYears(): { month: string, year: number }[] {
      const monthsAndYears = [];
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      for(let i = 0; i < 12; i++) {
      const date = new Date(currentYear, currentMonth - i, 1);
      monthsAndYears.push({
        month: date.toLocaleString('default', { month: 'long' }),
        year: date.getFullYear()
      });
    }

    return monthsAndYears;
  }
}
