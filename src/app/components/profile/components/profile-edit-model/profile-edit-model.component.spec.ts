import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditModelComponent } from './profile-edit-model.component';

describe('ProfileEditModelComponent', () => {
  let component: ProfileEditModelComponent;
  let fixture: ComponentFixture<ProfileEditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
