import { TestBed } from '@angular/core/testing';

import { ThreedayspredictionService } from './threedaysprediction.service';

describe('ThreedayspredictionService', () => {
  let service: ThreedayspredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreedayspredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
