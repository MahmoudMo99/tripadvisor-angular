import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResturantComponent } from './search-resturant.component';

describe('SearchResturantComponent', () => {
  let component: SearchResturantComponent;
  let fixture: ComponentFixture<SearchResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResturantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
