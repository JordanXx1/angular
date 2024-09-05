import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester5Component } from './tester5.component';

describe('Tester5Component', () => {
  let component: Tester5Component;
  let fixture: ComponentFixture<Tester5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
