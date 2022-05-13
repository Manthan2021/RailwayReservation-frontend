import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterconsumerComponent } from './registerconsumer.component';

describe('RegisterconsumerComponent', () => {
  let component: RegisterconsumerComponent;
  let fixture: ComponentFixture<RegisterconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterconsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
