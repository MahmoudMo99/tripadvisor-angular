import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarHomePageComponent } from './search-bar-home-page.component';

describe('SearchBarHomePageComponent', () => {
  let component: SearchBarHomePageComponent;
  let fixture: ComponentFixture<SearchBarHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
