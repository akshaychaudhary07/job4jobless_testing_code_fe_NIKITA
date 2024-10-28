import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBannerComponent } from './emp-banner.component';

describe('EmpBannerComponent', () => {
  let component: EmpBannerComponent;
  let fixture: ComponentFixture<EmpBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
