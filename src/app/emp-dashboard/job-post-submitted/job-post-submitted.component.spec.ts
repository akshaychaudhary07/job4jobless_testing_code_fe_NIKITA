import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostSubmittedComponent } from './job-post-submitted.component';

describe('JobPostSubmittedComponent', () => {
  let component: JobPostSubmittedComponent;
  let fixture: ComponentFixture<JobPostSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostSubmittedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
