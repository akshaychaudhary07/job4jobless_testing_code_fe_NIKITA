import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAdviceComponent } from './interview-advice.component';

describe('InterviewAdviceComponent', () => {
  let component: InterviewAdviceComponent;
  let fixture: ComponentFixture<InterviewAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewAdviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
