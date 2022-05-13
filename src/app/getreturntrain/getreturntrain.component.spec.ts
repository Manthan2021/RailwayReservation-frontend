import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreturntrainComponent } from './getreturntrain.component';

describe('GetreturntrainComponent', () => {
  let component: GetreturntrainComponent;
  let fixture: ComponentFixture<GetreturntrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetreturntrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetreturntrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
