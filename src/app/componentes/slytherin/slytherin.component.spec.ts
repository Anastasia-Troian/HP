/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlytherinComponent } from './slytherin.component';

describe('SlytherinComponent', () => {
  let component: SlytherinComponent;
  let fixture: ComponentFixture<SlytherinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlytherinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlytherinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
