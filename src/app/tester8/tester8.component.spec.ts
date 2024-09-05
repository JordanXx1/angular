import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester8Component } from './tester8.component';

describe('Tester8Component', () => {
  let component: Tester8Component;
  let fixture: ComponentFixture<Tester8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
