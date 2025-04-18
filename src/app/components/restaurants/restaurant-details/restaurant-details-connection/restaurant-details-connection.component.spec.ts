import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsConnectionComponent } from './restaurant-details-connection.component';

describe('RestaurantDetailsConnectionComponent', () => {
  let component: RestaurantDetailsConnectionComponent;
  let fixture: ComponentFixture<RestaurantDetailsConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
