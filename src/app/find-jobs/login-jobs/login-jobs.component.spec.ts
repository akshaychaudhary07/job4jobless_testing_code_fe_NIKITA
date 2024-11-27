import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJobsComponent } from './login-jobs.component';

describe('LoginJobsComponent', () => {
  let component: LoginJobsComponent;
  let fixture: ComponentFixture<LoginJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
