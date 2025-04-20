import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripInviteModalComponent } from './trip-invite-modal.component';

describe('TripInviteModalComponent', () => {
  let component: TripInviteModalComponent;
  let fixture: ComponentFixture<TripInviteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripInviteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripInviteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
