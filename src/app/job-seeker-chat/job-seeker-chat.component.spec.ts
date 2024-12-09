import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerChatComponent } from './job-seeker-chat.component';

describe('JobSeekerChatComponent', () => {
  let component: JobSeekerChatComponent;
  let fixture: ComponentFixture<JobSeekerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
