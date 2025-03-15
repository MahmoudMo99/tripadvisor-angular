import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBookingComponent } from './footer-booking.component';

describe('FooterBookingComponent', () => {
  let component: FooterBookingComponent;
  let fixture: ComponentFixture<FooterBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
