import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tester6Component } from './tester6.component';

describe('Tester6Component', () => {
  let component: Tester6Component;
  let fixture: ComponentFixture<Tester6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tester6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tester6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
