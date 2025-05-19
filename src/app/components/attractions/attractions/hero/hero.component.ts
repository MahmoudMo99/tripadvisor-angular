import { Component, OnInit } from '@angular/core';
import { ICards } from '../../../../models/attractions/i-cards';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttractionService } from '../../../../services/attractive/attraction.service';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule, FontAwesomeModule ,FormsModule ,ReactiveFormsModule],
})
export class HeroComponent implements OnInit {
  faSearch = faSearch;
  searchControl = new FormControl('');
  suggestions: ICards[] = [];
  loading = false;

  constructor(
    private attractionService: AttractionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => (this.loading = true)),
        switchMap((query) =>
          query
            ? this.attractionService.filterAttractions(query)
            : of([])
        ),
        tap(() => (this.loading = false)),
        catchError((err) => {
          console.error('Attraction search failed:', err);
          this.loading = false;
          return of([]);
        })
      )
      .subscribe((results) => {
        this.suggestions = results;
      });
  }


  getAttractionImage(attraction: ICards): string | null {
    return attraction.images?.[0] ?? null;
  }


  selectAttraction(attraction: ICards): void {
    this.router.navigate(['/attraction', attraction._id]);
  }
  
}
