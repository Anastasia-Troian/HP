/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RavenclawComponent } from './ravenclaw.component';

describe('RavenclawComponent', () => {
  let component: RavenclawComponent;
  let fixture: ComponentFixture<RavenclawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavenclawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenclawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
