import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsHomePageComponent } from './trends-home-page.component';

describe('TrendsHomePageComponent', () => {
  let component: TrendsHomePageComponent;
  let fixture: ComponentFixture<TrendsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendsHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
