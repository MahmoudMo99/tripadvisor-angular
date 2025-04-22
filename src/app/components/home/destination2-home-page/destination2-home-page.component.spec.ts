import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destination2HomePageComponent } from './destination2-home-page.component';

describe('Destination2HomePageComponent', () => {
  let component: Destination2HomePageComponent;
  let fixture: ComponentFixture<Destination2HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destination2HomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Destination2HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
