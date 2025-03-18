import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationResturantComponent } from './information-resturant.component';

describe('InformationResturantComponent', () => {
  let component: InformationResturantComponent;
  let fixture: ComponentFixture<InformationResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationResturantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
