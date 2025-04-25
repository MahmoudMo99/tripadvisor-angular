import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImageEditModelComponent } from './profile-image-edit-model.component';

describe('ProfileImageEditModelComponent', () => {
  let component: ProfileImageEditModelComponent;
  let fixture: ComponentFixture<ProfileImageEditModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileImageEditModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileImageEditModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
