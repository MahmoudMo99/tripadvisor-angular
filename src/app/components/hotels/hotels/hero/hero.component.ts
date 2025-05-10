import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  startWith,
  map,
  tap
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { HotelsService } from '../../../../services/hotels/hotels.service';
import { Hotel } from '../../../../models/hotels/Hotel';
import { IDestination } from '../../../../models/Destination/idestination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
})
export class HeroComponent implements OnInit {
  faSearch = faSearch;
  faCalendar = faCalendar;
  faUser = faUser;

  searchControl = new FormControl('');
  suggestions$: Observable<Hotel[]> = of([]);
  loading = false;
// searchControl = new FormControl('');
suggestions: Hotel[] = [];

  constructor(private hotelsService: HotelsService,  private router: Router 
) {}

ngOnInit(): void {
  this.searchControl.valueChanges.subscribe((val) => {
    const query = val?.trim();
    if (!query) {
      this.suggestions = [];
      return;
    }

    this.hotelsService.filterHotels(query).subscribe({
      next: (res) => {
        this.suggestions = res;
      },
      error: (err) => {
        console.error('Hotel filter failed:', err);
        this.suggestions = [];
      }
    });
  });
}


  selectDestination(hotel: Hotel): void {
    const name = this.getDestinationName(hotel);
    this.searchControl.setValue(name);
    console.log('Selected:', hotel);
      this.router.navigate(['/hotel', hotel._id]);

  }

  getDestinationImage(hotel: Hotel): string | null {
    const destination = hotel.destinationId as IDestination;
    return destination?.images?.[0] ?? hotel.images?.[0] ?? null;
  }

  getDestinationName(hotel: Hotel): string {
    const destination = hotel.destinationId as IDestination;
    return destination?.name ?? hotel.name;
  }
}
