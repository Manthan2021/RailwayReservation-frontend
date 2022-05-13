import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystationComponent } from './displaystation.component';

describe('DisplaystationComponent', () => {
  let component: DisplaystationComponent;
  let fixture: ComponentFixture<DisplaystationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaystationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaystationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
