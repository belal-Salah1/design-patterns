import { TestBed } from '@angular/core/testing';

import { PendingState } from './pending-state';

describe('PendingState', () => {
  let service: PendingState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
