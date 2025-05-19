import { Component, Input, Output,ViewEncapsulation, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AttractionService } from '../../../../services/attractive/attraction.service';
import { HotelService } from '../../../../services/hotel.service';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { FormsModule } from '@angular/forms';
import { Hotel } from '../../../../models/hotels/Hotel';
import { HotelsCategorizerService } from '../../../../services/hotels/hotels-Categorizer.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule],
    encapsulation: ViewEncapsulation.None

})
export class CardsComponent implements AfterViewInit {
  
  @Output() hotelClick = new EventEmitter<string>();
 hotels: Hotel[] = [];
  recommendedHotels: Hotel[] = [];
 
  @ViewChild('slider') slider!: ElementRef;

  stars: number[] = Array(5).fill(0); 

  visibleCount = 4;
  isExpanded = false;
  constructor(private router: Router, private hotelsService: HotelsService, private hotelsCategorizerService: HotelsCategorizerService) {}

    ngAfterViewInit() {
      this.hotelsService.initializeSlider(this.slider, 'card');
      console.log(this.hotels);
      
  }

  ngOnInit(): void {
    this.loadCategorizedHotels();
  }

  goToDetails(id: string) {
    this.hotelClick.emit(id);
    this.router.navigate(['/hotel', id]).then(() => {
  window.scrollTo(0, 0);
});

}



  private loadCategorizedHotels(): void {
    this.hotelsCategorizerService.getCategorizedHotels().subscribe({
      next: (result) => {
        this.hotels = result.hotels;
        this.recommendedHotels = result.topHotels;
       
      },
      error: (err) => console.error('Error fetching categorized hotels:', err)
    });
  }

  next() {
    this.hotelsService.next(this.slider);
    console.log('Next clicked');
  }

  prev() {
    this.hotelsService.prev(this.slider);
    console.log('Previous clicked');
  }


  
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    this.visibleCount = this.isExpanded ? 8 : 4;
  }

  get visibleHotels(): Hotel[] {
    return this.recommendedHotels.slice(0, this.visibleCount);
  }
}

 


