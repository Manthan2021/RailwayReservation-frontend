import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayreturnstationComponent } from './displayreturnstation.component';

describe('DisplayreturnstationComponent', () => {
  let component: DisplayreturnstationComponent;
  let fixture: ComponentFixture<DisplayreturnstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayreturnstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayreturnstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
