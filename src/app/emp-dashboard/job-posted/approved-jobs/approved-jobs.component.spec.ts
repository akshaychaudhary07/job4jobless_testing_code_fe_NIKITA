import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedJobsComponent } from './approved-jobs.component';

describe('ApprovedJobsComponent', () => {
  let component: ApprovedJobsComponent;
  let fixture: ComponentFixture<ApprovedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovedJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
