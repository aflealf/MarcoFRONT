import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUD1Component } from './crud1.component';

describe('CRUD1Component', () => {
  let component: CRUD1Component;
  let fixture: ComponentFixture<CRUD1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUD1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
