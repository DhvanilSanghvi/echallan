import { TestBed } from '@angular/core/testing';

import { SendobjService } from './sendobj.service';

describe('SendobjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendobjService = TestBed.get(SendobjService);
    expect(service).toBeTruthy();
  });
});
