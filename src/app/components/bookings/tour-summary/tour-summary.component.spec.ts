import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSummaryComponent } from './tour-summary.component';

describe('TourSummaryComponent', () => {
  let component: TourSummaryComponent;
  let fixture: ComponentFixture<TourSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
