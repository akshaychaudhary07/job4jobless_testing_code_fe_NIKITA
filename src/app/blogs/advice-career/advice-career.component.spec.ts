import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceCareerComponent } from './advice-career.component';

describe('AdviceCareerComponent', () => {
  let component: AdviceCareerComponent;
  let fixture: ComponentFixture<AdviceCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceCareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
