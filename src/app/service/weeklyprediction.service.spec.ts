import { TestBed } from '@angular/core/testing';

import { WeeklypredictionService } from './weeklyprediction.service';

describe('WeeklypredictionService', () => {
  let service: WeeklypredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklypredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
