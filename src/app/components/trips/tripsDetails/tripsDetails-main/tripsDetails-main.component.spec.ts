/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TripsDetailsMainComponent } from './tripsDetails-main.component';

describe('TripsDetailsMainComponent', () => {
  let component: TripsDetailsMainComponent;
  let fixture: ComponentFixture<TripsDetailsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsDetailsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
