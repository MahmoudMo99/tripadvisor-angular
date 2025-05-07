import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLanguageComponent } from './modal-language.component';

describe('ModalLanguageComponent', () => {
  let component: ModalLanguageComponent;
  let fixture: ComponentFixture<ModalLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
