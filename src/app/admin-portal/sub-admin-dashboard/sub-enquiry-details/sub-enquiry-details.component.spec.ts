import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEnquiryDetailsComponent } from './sub-enquiry-details.component';

describe('SubEnquiryDetailsComponent', () => {
  let component: SubEnquiryDetailsComponent;
  let fixture: ComponentFixture<SubEnquiryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubEnquiryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubEnquiryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
