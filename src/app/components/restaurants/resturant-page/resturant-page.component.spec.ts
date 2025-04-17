import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantPageComponent } from './resturant-page.component';

describe('ResturantPageComponent', () => {
  let component: ResturantPageComponent;
  let fixture: ComponentFixture<ResturantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturantPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
