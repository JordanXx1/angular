import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developer5Component } from './developer5.component';

describe('Developer5Component', () => {
  let component: Developer5Component;
  let fixture: ComponentFixture<Developer5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Developer5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
