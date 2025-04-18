import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsModelComponent } from './restaurant-details-model.component';

describe('RestaurantDetailsModelComponent', () => {
  let component: RestaurantDetailsModelComponent;
  let fixture: ComponentFixture<RestaurantDetailsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
