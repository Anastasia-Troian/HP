/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HufflepuffComponent } from './hufflepuff.component';

describe('HufflepuffComponent', () => {
  let component: HufflepuffComponent;
  let fixture: ComponentFixture<HufflepuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HufflepuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HufflepuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
