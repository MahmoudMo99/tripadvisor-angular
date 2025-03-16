import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightpageComponent } from './flightpage.component';

describe('FlightpageComponent', () => {
  let component: FlightpageComponent;
  let fixture: ComponentFixture<FlightpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
