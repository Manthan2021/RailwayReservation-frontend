import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytrainComponent } from './displaytrain.component';

describe('DisplaytrainComponent', () => {
  let component: DisplaytrainComponent;
  let fixture: ComponentFixture<DisplaytrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
