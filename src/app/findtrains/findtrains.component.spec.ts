import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindtrainsComponent } from './findtrains.component';

describe('FindtrainsComponent', () => {
  let component: FindtrainsComponent;
  let fixture: ComponentFixture<FindtrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindtrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
