import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminLogoutComponent } from './sub-admin-logout.component';

describe('SubAdminLogoutComponent', () => {
  let component: SubAdminLogoutComponent;
  let fixture: ComponentFixture<SubAdminLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubAdminLogoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubAdminLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
