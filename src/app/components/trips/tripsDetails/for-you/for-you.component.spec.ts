/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TripsDetailsForYouComponent } from './for-you.component';

describe('TripsDetailsForYouComponent', () => {
  let component: TripsDetailsForYouComponent;
  let fixture: ComponentFixture<TripsDetailsForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsDetailsForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsDetailsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
