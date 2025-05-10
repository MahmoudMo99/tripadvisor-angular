import { Component, Input, Output,ViewEncapsulation, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AttractionService } from '../../../services/attractive/attraction.service';
import { HotelService } from '../../../services/hotel.service';
import { HotelsService } from '../../../services/hotels/hotels.service';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.css'],
  standalone: true,
  imports: [CommonModule],
    encapsulation: ViewEncapsulation.None

})
export class CardsTemplateComponent implements AfterViewInit {
  
  @Input() hotels: any[] = []; 
  @Input() title: string = ''; 
  @Input() showPriceAndReview: boolean = true;
  @Output() hotelClick = new EventEmitter<string>();
  @Input() customCardClass: string = ''; 

  @ViewChild('slider') slider!: ElementRef;

  stars: number[] = Array(5).fill(0); 

  constructor(private router: Router, private hotelsService: HotelsService) {}

    ngAfterViewInit() {
    this.hotelsService.initializeSlider(this.slider, 'card');
  }
  goToDetails(id: string) {
    this.hotelClick.emit(id);
    this.router.navigate(['/hotel', id]).then(() => {
  window.scrollTo(0, 0);
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
}
