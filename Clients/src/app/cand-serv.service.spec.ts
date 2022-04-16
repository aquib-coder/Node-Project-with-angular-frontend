import { TestBed } from '@angular/core/testing';

import { CandServService } from './cand-serv.service';

describe('CandServService', () => {
  let service: CandServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
