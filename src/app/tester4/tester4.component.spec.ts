import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester4Component } from './tester4.component';

describe('Tester4Component', () => {
  let component: Tester4Component;
  let fixture: ComponentFixture<Tester4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
