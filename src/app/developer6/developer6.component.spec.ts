import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer6Component } from './developer6.component';

describe('Developer6Component', () => {
  let component: Developer6Component;
  let fixture: ComponentFixture<Developer6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
