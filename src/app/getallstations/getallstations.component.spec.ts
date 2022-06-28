import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallstationsComponent } from './getallstations.component';

describe('GetallstationsComponent', () => {
  let component: GetallstationsComponent;
  let fixture: ComponentFixture<GetallstationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallstationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
