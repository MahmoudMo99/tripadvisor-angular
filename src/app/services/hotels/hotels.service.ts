import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API } from '../../constants/api-urs';
import { Hotel } from '../../models/hotels/Hotel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private scrollAmount = 0;
  private cardWidth = 0;

  constructor(private http: HttpClient) {}

  initializeSlider(slider: ElementRef, cardClass: string) {
    const cardElement = slider.nativeElement.querySelector(`.${cardClass}`);
    if (cardElement) {
      this.cardWidth = cardElement.offsetWidth + 10;
    }
  }

  next(slider: ElementRef) {
    const maxScroll = slider.nativeElement.scrollWidth - slider.nativeElement.clientWidth;
    this.scrollAmount = Math.min(this.scrollAmount + this.cardWidth, maxScroll);
    this.applyTransform(slider);
  }

  prev(slider: ElementRef) {
    this.scrollAmount = Math.max(this.scrollAmount - this.cardWidth, 0);
    this.applyTransform(slider);
  }

  private applyTransform(slider: ElementRef) {
    slider.nativeElement.style.transform = `translateX(-${this.scrollAmount}px)`;
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(API.hotels.getAll);
  }


getHotelById(id: string): Observable<Hotel> {
  return this.http.get<{ message: string; hotel: Hotel }>(API.hotels.getById(id)).pipe(
    map(response => response.hotel)
  );
}

  
  checkAvailability(
  hotelId: string,
  checkIn: string,
  checkOut: string,
  adults: number,
  children: number,
  roomsCount: number
) {
  const params = {
    checkIn,
    checkOut,
    adults: adults.toString(),
    children: children.toString(),
    roomsCount: roomsCount.toString()
  };

  return this.http.get<{ message: string, rooms: any[] }>(
    API.hotels.checkAvailability(hotelId),
    { params }
  );
}
filterHotels(query: string): Observable<Hotel[]> {
  return this.http
    .get<{ hotels: Hotel[] }>(API.hotels.filter + `?destinationName=${query}`)
    .pipe(map(res => res.hotels));
}


}
