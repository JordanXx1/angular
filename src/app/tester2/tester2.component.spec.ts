import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester2Component } from './tester2.component';

describe('Tester2Component', () => {
  let component: Tester2Component;
  let fixture: ComponentFixture<Tester2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
