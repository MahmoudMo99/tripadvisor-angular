import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreackfastRestautantComponent } from './breackfast-restautant.component';

describe('BreackfastRestautantComponent', () => {
  let component: BreackfastRestautantComponent;
  let fixture: ComponentFixture<BreackfastRestautantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreackfastRestautantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreackfastRestautantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
