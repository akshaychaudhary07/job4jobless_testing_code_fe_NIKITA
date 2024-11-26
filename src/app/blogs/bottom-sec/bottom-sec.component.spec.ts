import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSecComponent } from './bottom-sec.component';

describe('BottomSecComponent', () => {
  let component: BottomSecComponent;
  let fixture: ComponentFixture<BottomSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
