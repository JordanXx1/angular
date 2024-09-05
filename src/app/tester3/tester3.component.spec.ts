import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester3Component } from './tester3.component';

describe('Tester3Component', () => {
  let component: Tester3Component;
  let fixture: ComponentFixture<Tester3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
