import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedUsersComponent } from './applied-users.component';

describe('AppliedUsersComponent', () => {
  let component: AppliedUsersComponent;
  let fixture: ComponentFixture<AppliedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliedUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
