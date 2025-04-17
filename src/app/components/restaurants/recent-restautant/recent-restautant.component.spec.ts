import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRestautantComponent } from './recent-restautant.component';

describe('RecentRestautantComponent', () => {
  let component: RecentRestautantComponent;
  let fixture: ComponentFixture<RecentRestautantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentRestautantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentRestautantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
