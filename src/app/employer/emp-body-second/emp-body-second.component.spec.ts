import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBodySecondComponent } from './emp-body-second.component';

describe('EmpBodySecondComponent', () => {
  let component: EmpBodySecondComponent;
  let fixture: ComponentFixture<EmpBodySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpBodySecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBodySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
