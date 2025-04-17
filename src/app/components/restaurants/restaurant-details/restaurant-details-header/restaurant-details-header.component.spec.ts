import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsHeaderComponent } from './restaurant-details-header.component';

describe('RestaurantDetailsHeaderComponent', () => {
  let component: RestaurantDetailsHeaderComponent;
  let fixture: ComponentFixture<RestaurantDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
