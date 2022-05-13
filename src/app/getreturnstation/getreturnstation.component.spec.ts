import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreturnstationComponent } from './getreturnstation.component';

describe('GetreturnstationComponent', () => {
  let component: GetreturnstationComponent;
  let fixture: ComponentFixture<GetreturnstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetreturnstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetreturnstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
