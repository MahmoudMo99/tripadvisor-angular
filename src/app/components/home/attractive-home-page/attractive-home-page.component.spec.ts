import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractiveHomePageComponent } from './attractive-home-page.component';

describe('AttractiveHomePageComponent', () => {
  let component: AttractiveHomePageComponent;
  let fixture: ComponentFixture<AttractiveHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractiveHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractiveHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
