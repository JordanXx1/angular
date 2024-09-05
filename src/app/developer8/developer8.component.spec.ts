import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer8Component } from './developer8.component';

describe('Developer8Component', () => {
  let component: Developer8Component;
  let fixture: ComponentFixture<Developer8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
