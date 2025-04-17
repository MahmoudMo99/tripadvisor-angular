import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsOverviewComponent } from './restaurant-details-overview.component';

describe('RestaurantDetailsOverviewComponent', () => {
  let component: RestaurantDetailsOverviewComponent;
  let fixture: ComponentFixture<RestaurantDetailsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
