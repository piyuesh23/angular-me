/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntitylistComponent } from './entitylist.component';

describe('EntitylistComponent', () => {
  let component: EntitylistComponent;
  let fixture: ComponentFixture<EntitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
