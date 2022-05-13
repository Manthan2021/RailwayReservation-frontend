import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturnstationComponent } from './addreturnstation.component';

describe('AddreturnstationComponent', () => {
  let component: AddreturnstationComponent;
  let fixture: ComponentFixture<AddreturnstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreturnstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreturnstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
