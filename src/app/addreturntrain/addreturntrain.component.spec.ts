import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturntrainComponent } from './addreturntrain.component';

describe('AddreturntrainComponent', () => {
  let component: AddreturntrainComponent;
  let fixture: ComponentFixture<AddreturntrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreturntrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreturntrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
