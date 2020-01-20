import { TestBed } from '@angular/core/testing';

import { ResultListServiceService } from './result-list-service.service';

describe('ResultListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultListServiceService = TestBed.get(ResultListServiceService);
    expect(service).toBeTruthy();
  });
});
