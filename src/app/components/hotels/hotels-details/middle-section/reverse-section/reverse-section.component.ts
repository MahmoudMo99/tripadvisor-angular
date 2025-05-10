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
    this.route.paramMap.subscribe(params => {
      this.attractionId = params.get('id') || '';
      console.log('Route ID:', this.attractionId);
      console.log(this.attractionId);

      if (this.attractionId) {
        this.loadAttraction(this.attractionId);

        this.bookingData = {
  selectedDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], 
          travelers: 1,
          selectedTime: '7:00 PM',
          totalPrice: 0,
          reviews:0,
          title: '',
          image: '',
          attraction: this.attraction,
          attractionId: ''
        };

        console.log("bookingData attractionId", this.bookingData.attractionId);
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

        if (this.bookingData) {
          this.bookingData.title = attraction.title;
          this.bookingData.image = attraction.images[0] || 'assets/19th-century.jpg';
this.pricePerAdult = attraction.price ?? 0;
          this.bookingData.totalPrice = attraction.price;
          this.bookingData.reviews = attraction.reviewsCount || 0;
          this.bookingData.attraction = attraction;
          this.bookingData.attractionId= attraction.id
          this.updateTotalPrice();
          console.log(this.attraction.reviewsCount);
          
          console.log(this.bookingData.attraction);
          
        }
      },
      (error) => {
        console.error('Error fetching attraction:', error);
      }
    );
  }

  onTravelersChange(event: any) {
    this.bookingData.travelers = +event.target.value;
    this.updateTotalPrice();
  }

  onDateChange(event: any) {
    this.bookingData.selectedDate = event.target.value;
  }

  selectTime(time: string) {
    this.bookingData.selectedTime = time;
  }

  updateTotalPrice() {
    this.bookingData.totalPrice = this.bookingData.travelers * this.pricePerAdult;
  }

  reverse(form: any) {
    const { selectedDate, travelers, selectedTime , attraction} = form;

    this.bookingData.selectedDate = selectedDate || this.bookingData.selectedDate;
    this.bookingData.travelers = travelers || this.bookingData.travelers;
    this.bookingData.selectedTime = selectedTime || this.bookingData.selectedTime;
    this.attraction = attraction
    console.log(this.attraction);
    
    this.updateTotalPrice();

    console.log('Booking confirmed with:', this.bookingData);

    this.attractionClick.emit(this.bookingData.attractionId);

    this.router.navigate([`/attraction/${this.attractionId}/contact`], {
      state: { booking: this.bookingData }
    }).then(() => {
      window.scrollTo(0, 0);
    });
  }
}


