import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetflightdetailsComponent } from './getflightdetails.component';

describe('GetflightdetailsComponent', () => {
  let component: GetflightdetailsComponent;
  let fixture: ComponentFixture<GetflightdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetflightdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetflightdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
