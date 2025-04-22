import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHomePageComponent } from './nav-bar-home-page.component';

describe('NavBarHomePageComponent', () => {
  let component: NavBarHomePageComponent;
  let fixture: ComponentFixture<NavBarHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
