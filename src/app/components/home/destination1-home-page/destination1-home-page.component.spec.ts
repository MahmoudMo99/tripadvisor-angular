import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destination1HomePageComponent } from './destination1-home-page.component';

describe('Destination1HomePageComponent', () => {
  let component: Destination1HomePageComponent;
  let fixture: ComponentFixture<Destination1HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destination1HomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Destination1HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
