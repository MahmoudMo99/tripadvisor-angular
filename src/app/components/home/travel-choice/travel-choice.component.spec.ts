import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelChoiceComponent } from './travel-choice.component';

describe('TravelChoiceComponent', () => {
  let component: TravelChoiceComponent;
  let fixture: ComponentFixture<TravelChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
