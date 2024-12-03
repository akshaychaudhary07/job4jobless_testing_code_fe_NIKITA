import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNotificationComponent } from './no-notification.component';

describe('NoNotificationComponent', () => {
  let component: NoNotificationComponent;
  let fixture: ComponentFixture<NoNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
