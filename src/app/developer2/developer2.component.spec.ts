import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer2Component } from './developer2.component';

describe('Developer2Component', () => {
  let component: Developer2Component;
  let fixture: ComponentFixture<Developer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
