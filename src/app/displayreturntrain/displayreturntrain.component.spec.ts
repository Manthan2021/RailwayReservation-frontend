import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayreturntrainComponent } from './displayreturntrain.component';

describe('DisplayreturntrainComponent', () => {
  let component: DisplayreturntrainComponent;
  let fixture: ComponentFixture<DisplayreturntrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayreturntrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayreturntrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
