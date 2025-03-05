import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToHomePageComponent } from './where-to-home-page.component';

describe('WhereToHomePageComponent', () => {
  let component: WhereToHomePageComponent;
  let fixture: ComponentFixture<WhereToHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereToHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereToHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
