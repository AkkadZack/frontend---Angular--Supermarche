import { TestBed } from '@angular/core/testing';

import { LcmdService } from './lcmd.service';

describe('LcmdService', () => {
  let service: LcmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
