import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreExploreComponent } from './more-explore.component';

describe('MoreExploreComponent', () => {
  let component: MoreExploreComponent;
  let fixture: ComponentFixture<MoreExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreExploreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
