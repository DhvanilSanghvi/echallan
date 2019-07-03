import { TestBed } from '@angular/core/testing';

import { SampleTransactionService } from './sample-transaction.service';

describe('SampleTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleTransactionService = TestBed.get(SampleTransactionService);
    expect(service).toBeTruthy();
  });
});
