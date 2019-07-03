import { TestBed } from '@angular/core/testing';

import { DatapoliceidService } from './datapoliceid.service';

describe('DatapoliceidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatapoliceidService = TestBed.get(DatapoliceidService);
    expect(service).toBeTruthy();
  });
});
