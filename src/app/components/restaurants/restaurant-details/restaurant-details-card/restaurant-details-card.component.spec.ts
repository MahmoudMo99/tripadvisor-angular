import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsCardComponent } from './restaurant-details-card.component';

describe('RestaurantDetailsCardComponent', () => {
  let component: RestaurantDetailsCardComponent;
  let fixture: ComponentFixture<RestaurantDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
