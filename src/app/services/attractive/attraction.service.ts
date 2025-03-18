import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API} from '../../constants/api-urs'
import { ICards } from '../../models/attractions/i-cards';
@Injectable({
  providedIn: 'root'
})
export class AttractionService {
  private scrollAmount = 0;
  private cardWidth = 0;

  constructor(private http: HttpClient) { }
  initializeSlider(slider: ElementRef, cardClass: string) {
    if (!slider?.nativeElement) return;

const cardElement = slider.nativeElement.querySelector(`.${cardClass}`);
    if (cardElement) {
      this.cardWidth = cardElement.offsetWidth + 10; 
    }
  }

  next(slider: ElementRef) {
    if (!slider?.nativeElement) return;

    const maxScroll = slider.nativeElement.scrollWidth - slider.nativeElement.clientWidth;
    
    if (this.scrollAmount + this.cardWidth >= maxScroll) {
      this.scrollAmount = maxScroll; 
    } else {
      this.scrollAmount += this.cardWidth;
    }

    this.applyTransform(slider);
  }

  prev(slider: ElementRef) {
    if (!slider?.nativeElement) return;

    if (this.scrollAmount - this.cardWidth <= 0) {
      this.scrollAmount = 0;
    } else {
      this.scrollAmount -= this.cardWidth;
    }

    this.applyTransform(slider);
  }

 private applyTransform(slider: ElementRef) {
  slider.nativeElement.style.transform = `translateX(-${this.scrollAmount}px)`;
}



  /////////////////////////////////////////////////////////////////////////////////////////////////

 getAttractions(): Observable<ICards[]> {
    return this.http.get<ICards[]>(API.attractives.getAll);
  }

  getAttractionById(id: string): Observable<ICards> {
    return this.http.get<ICards>(API.attractives.getById(id));
  }
}
