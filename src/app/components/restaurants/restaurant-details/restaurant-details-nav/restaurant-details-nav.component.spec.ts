import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsNavComponent } from './restaurant-details-nav.component';

describe('RestaurantDetailsNavComponent', () => {
  let component: RestaurantDetailsNavComponent;
  let fixture: ComponentFixture<RestaurantDetailsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
