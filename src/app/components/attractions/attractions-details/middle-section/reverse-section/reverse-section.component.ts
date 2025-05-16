import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttractionService } from '../../../../../services/attractive/attraction.service';
import { ICards } from '../../../../../models/attractions/i-cards';

@Component({
  selector: 'app-reverse-section',
  standalone: true,
  templateUrl: './reverse-section.component.html',
  styleUrls: ['./reverse-section.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ReverseSectionComponent implements OnInit {
  @Output() attractionClick = new EventEmitter<string>();

  pricePerAdult = 0;
  attractionId!: string;
  attraction!: ICards | undefined;

  bookingData: any;

  constructor(
    private router: Router,
    private attractionService: AttractionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.attractionId = params.get('id') || '';
      console.log('Route IDdddddddddddddddddddddddddddddddddd:', this.attractionId);

      if (this.attractionId) {
        this.loadAttraction(this.attractionId);
      } else {
        console.error('No attractionId found in route params!');
      }
    });
  }

  private loadAttraction(id: string): void {
    console.log('Loading attraction by ID:', id);

    this.attractionService.getAttractionById(id).subscribe(
      (attraction: ICards) => {
        this.attraction = attraction;
        console.log('Attraction loaded:', this.attraction);

        this.pricePerAdult = attraction.price ?? 0;

        this.bookingData = {
          checkIn: new Date(Date.now() + 86400000 * 3)
            .toISOString()
            .split('T')[0],
          travelers: 1,
          selectedTime: '7:00 PM',
          totalPrice: attraction.price,
          reviews: attraction.reviewsCount || 0,
          title: attraction.title,
          image: attraction.images[0] || 'assets/19th-century.jpg',
          attraction: attraction,
          attractionId: this.attractionId,
          reference: this.attractionId,
          type: 'Attractive',
        };

        console.log(
          '✅ bookingData created with correct attractionId:',
          this.bookingData.attractionId
        );
        this.updateTotalPrice();
      },
      (error) => {
        console.error('❌ Error fetching attraction:', error);
      }
    );
  }

  onTravelersChange(event: any) {
    this.bookingData.travelers = +event.target.value;
    console.log('Travelers updated to:', this.bookingData.travelers);
    this.updateTotalPrice();
  }

  onDateChange(event: any) {
    this.bookingData.selectedDate = event.target.value;
    console.log('Selected date updated to:', this.bookingData.selectedDate);
  }

  selectTime(time: string) {
    this.bookingData.selectedTime = time;
    console.log('Selected time updated to:', this.bookingData.selectedTime);
  }

  updateTotalPrice() {
    this.bookingData.totalPrice =
      this.bookingData.travelers * this.pricePerAdult;
    console.log('Total price updated to:', this.bookingData.totalPrice);
  }

  reverse(form: any) {
    const { selectedDate, travelers, selectedTime, attraction } = form;

    this.bookingData.selectedDate =
      selectedDate || this.bookingData.selectedDate;
    this.bookingData.travelers = travelers || this.bookingData.travelers;
    this.bookingData.selectedTime =
      selectedTime || this.bookingData.selectedTime;
    this.attraction = attraction;

    console.log('Reverse attraction data:', this.attraction);

    this.updateTotalPrice();

    console.log('✅ Booking confirmed with:', this.bookingData);

    this.attractionClick.emit(this.bookingData.attractionId);

    this.router
      .navigate(['/Booking'], {
        state: { booking: this.bookingData },
      })
      .then(() => {
        window.scrollTo(0, 0);
        console.log('🧭 Navigated to /Booking with bookingData in state');
      });
  }
}
