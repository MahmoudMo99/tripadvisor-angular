import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateSearchHomePageComponent } from './navigate-search-home-page.component';

describe('NavigateSearchHomePageComponent', () => {
  let component: NavigateSearchHomePageComponent;
  let fixture: ComponentFixture<NavigateSearchHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigateSearchHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateSearchHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
