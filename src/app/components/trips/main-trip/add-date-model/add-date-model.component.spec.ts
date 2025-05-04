import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateModelComponent } from './add-date-model.component';

describe('AddDateModelComponent', () => {
  let component: AddDateModelComponent;
  let fixture: ComponentFixture<AddDateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDateModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
