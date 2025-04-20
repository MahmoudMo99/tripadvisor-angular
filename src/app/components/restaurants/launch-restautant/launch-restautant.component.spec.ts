import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchRestautantComponent } from './launch-restautant.component';

describe('LaunchRestautantComponent', () => {
  let component: LaunchRestautantComponent;
  let fixture: ComponentFixture<LaunchRestautantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchRestautantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchRestautantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
