import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerObjectiveComponent } from './career-objective.component';

describe('CareerObjectiveComponent', () => {
  let component: CareerObjectiveComponent;
  let fixture: ComponentFixture<CareerObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerObjectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
