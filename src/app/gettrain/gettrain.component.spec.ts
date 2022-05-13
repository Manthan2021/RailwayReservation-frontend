import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettrainComponent } from './gettrain.component';

describe('GettrainComponent', () => {
  let component: GettrainComponent;
  let fixture: ComponentFixture<GettrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
