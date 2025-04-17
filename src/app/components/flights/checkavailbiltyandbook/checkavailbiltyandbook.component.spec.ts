import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailbiltyandbookComponent } from './checkavailbiltyandbook.component';

describe('CheckavailbiltyandbookComponent', () => {
  let component: CheckavailbiltyandbookComponent;
  let fixture: ComponentFixture<CheckavailbiltyandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckavailbiltyandbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckavailbiltyandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
