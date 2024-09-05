import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer7Component } from './developer7.component';

describe('Developer7Component', () => {
  let component: Developer7Component;
  let fixture: ComponentFixture<Developer7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
