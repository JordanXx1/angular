import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester7Component } from './tester7.component';

describe('Tester7Component', () => {
  let component: Tester7Component;
  let fixture: ComponentFixture<Tester7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
