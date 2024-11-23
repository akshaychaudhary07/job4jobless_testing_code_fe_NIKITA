import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringSolutionComponent } from './hiring-solution.component';

describe('HiringSolutionComponent', () => {
  let component: HiringSolutionComponent;
  let fixture: ComponentFixture<HiringSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
