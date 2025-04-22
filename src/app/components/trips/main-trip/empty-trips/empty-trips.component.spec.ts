import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTripsComponent } from './empty-trips.component';

describe('EmptyTripsComponent', () => {
  let component: EmptyTripsComponent;
  let fixture: ComponentFixture<EmptyTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyTripsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
