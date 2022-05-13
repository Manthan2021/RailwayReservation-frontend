import { TestBed } from '@angular/core/testing';

import { StationreturnService } from './stationreturn.service';

describe('StationreturnService', () => {
  let service: StationreturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationreturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
