import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSkillsComponent } from './learn-skills.component';

describe('LearnSkillsComponent', () => {
  let component: LearnSkillsComponent;
  let fixture: ComponentFixture<LearnSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
