import { Component, Input, Output,ViewEncapsulation, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AttractionService } from '../../../services/attractive/attraction.service';

@Component({
  selector: 'app-cards-template',
  templateUrl: './cards-template.component.html',
  styleUrls: ['./cards-template.component.css'],
  standalone: true,
  imports: [CommonModule],
    encapsulation: ViewEncapsulation.None

})
export class CardsTemplateComponent implements AfterViewInit {
  
  @Input() attractions: any[] = []; 
  @Input() title: string = ''; 
  @Input() showPriceAndReview: boolean = true;
  @Output() attractionClick = new EventEmitter<string>();
  @Input() customCardClass: string = ''; 

  @ViewChild('slider') slider!: ElementRef;

  stars: number[] = Array(5).fill(0); 

  constructor(private router: Router, private attractionService: AttractionService) {}

    ngAfterViewInit() {
    this.attractionService.initializeSlider(this.slider, 'card');
  }
  goToDetails(id: string) {
    this.attractionClick.emit(id);
    this.router.navigate(['/attraction', id]).then(() => {
  window.scrollTo(0, 0);
});

}




  next() {
    this.attractionService.next(this.slider);
    console.log('Next clicked');
  }

  prev() {
    this.attractionService.prev(this.slider);
    console.log('Previous clicked');
  }
}
