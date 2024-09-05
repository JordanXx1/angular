import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer3Component } from './developer3.component';

describe('Developer3Component', () => {
  let component: Developer3Component;
  let fixture: ComponentFixture<Developer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
