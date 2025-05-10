/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SavesComponent } from './saves.component';

describe('SavesComponent', () => {
  let component: SavesComponent;
  let fixture: ComponentFixture<SavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
