import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostedComponent } from './job-posted.component';

describe('JobPostedComponent', () => {
  let component: JobPostedComponent;
  let fixture: ComponentFixture<JobPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobPostedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
