import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerHelpDeskComponent } from './jobseeker-help-desk.component';

describe('JobseekerHelpDeskComponent', () => {
  let component: JobseekerHelpDeskComponent;
  let fixture: ComponentFixture<JobseekerHelpDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobseekerHelpDeskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
