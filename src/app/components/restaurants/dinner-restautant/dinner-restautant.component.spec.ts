import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerRestautantComponent } from './dinner-restautant.component';

describe('DinnerRestautantComponent', () => {
  let component: DinnerRestautantComponent;
  let fixture: ComponentFixture<DinnerRestautantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinnerRestautantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerRestautantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
