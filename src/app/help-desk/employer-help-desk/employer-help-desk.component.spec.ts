import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHelpDeskComponent } from './employer-help-desk.component';

describe('EmployerHelpDeskComponent', () => {
  let component: EmployerHelpDeskComponent;
  let fixture: ComponentFixture<EmployerHelpDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerHelpDeskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
