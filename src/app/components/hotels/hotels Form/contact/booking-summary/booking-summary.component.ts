// booking-summary-display.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  @Input() bookingData: any;
  stars: number[] = Array(5).fill(0); 

  constructor() {}

  ngOnInit(): void {
    // console.log(this.bookingData.attractionId);
    // console.log(this.bookingData.reviews);
    
  }
}