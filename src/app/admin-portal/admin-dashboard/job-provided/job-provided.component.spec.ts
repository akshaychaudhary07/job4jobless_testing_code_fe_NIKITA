import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProvidedComponent } from './job-provided.component';

describe('JobProvidedComponent', () => {
  let component: JobProvidedComponent;
  let fixture: ComponentFixture<JobProvidedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobProvidedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobProvidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
