import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfindtrainsComponent } from './displayfindtrains.component';

describe('DisplayfindtrainsComponent', () => {
  let component: DisplayfindtrainsComponent;
  let fixture: ComponentFixture<DisplayfindtrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfindtrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfindtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
