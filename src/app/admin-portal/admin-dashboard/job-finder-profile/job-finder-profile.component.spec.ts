import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFinderProfileComponent } from './job-finder-profile.component';

describe('JobFinderProfileComponent', () => {
  let component: JobFinderProfileComponent;
  let fixture: ComponentFixture<JobFinderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobFinderProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFinderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
