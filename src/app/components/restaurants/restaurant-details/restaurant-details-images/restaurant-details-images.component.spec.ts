import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsImagesComponent } from './restaurant-details-images.component';

describe('RestaurantDetailsImagesComponent', () => {
  let component: RestaurantDetailsImagesComponent;
  let fixture: ComponentFixture<RestaurantDetailsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantDetailsImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
