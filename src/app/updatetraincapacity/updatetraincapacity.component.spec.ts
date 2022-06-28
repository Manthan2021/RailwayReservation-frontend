import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetraincapacityComponent } from './updatetraincapacity.component';

describe('UpdatetraincapacityComponent', () => {
  let component: UpdatetraincapacityComponent;
  let fixture: ComponentFixture<UpdatetraincapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetraincapacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetraincapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
