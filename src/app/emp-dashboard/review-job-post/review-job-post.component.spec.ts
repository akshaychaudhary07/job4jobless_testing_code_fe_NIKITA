import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewJobPostComponent } from './review-job-post.component';

describe('ReviewJobPostComponent', () => {
  let component: ReviewJobPostComponent;
  let fixture: ComponentFixture<ReviewJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewJobPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
