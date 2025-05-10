import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripShareModalComponent } from './trip-share-modal.component';

describe('TripShareModalComponent', () => {
  let component: TripShareModalComponent;
  let fixture: ComponentFixture<TripShareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripShareModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
