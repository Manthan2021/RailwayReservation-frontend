import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstationComponent } from './getstation.component';

describe('GetstationComponent', () => {
  let component: GetstationComponent;
  let fixture: ComponentFixture<GetstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
