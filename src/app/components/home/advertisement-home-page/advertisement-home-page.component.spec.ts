import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementHomePageComponent } from './advertisement-home-page.component';

describe('AdvertisementHomePageComponent', () => {
  let component: AdvertisementHomePageComponent;
  let fixture: ComponentFixture<AdvertisementHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisementHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
