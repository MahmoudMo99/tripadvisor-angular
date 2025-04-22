import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDestnationComponent } from './popular-destnation.component';

describe('PopularDestnationComponent', () => {
  let component: PopularDestnationComponent;
  let fixture: ComponentFixture<PopularDestnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularDestnationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularDestnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
