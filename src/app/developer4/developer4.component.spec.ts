import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer4Component } from './developer4.component';

describe('Developer4Component', () => {
  let component: Developer4Component;
  let fixture: ComponentFixture<Developer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
