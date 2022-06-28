import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltrainsComponent } from './getalltrains.component';

describe('GetalltrainsComponent', () => {
  let component: GetalltrainsComponent;
  let fixture: ComponentFixture<GetalltrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalltrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalltrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
