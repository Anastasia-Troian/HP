/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GryffindorComponent } from './gryffindor.component';

describe('GryffindorComponent', () => {
  let component: GryffindorComponent;
  let fixture: ComponentFixture<GryffindorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GryffindorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GryffindorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
