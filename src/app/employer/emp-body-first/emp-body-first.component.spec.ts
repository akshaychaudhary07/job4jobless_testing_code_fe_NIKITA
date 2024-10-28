import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBodyFirstComponent } from './emp-body-first.component';

describe('EmpBodyFirstComponent', () => {
  let component: EmpBodyFirstComponent;
  let fixture: ComponentFixture<EmpBodyFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpBodyFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBodyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
