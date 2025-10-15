import { TestBed } from '@angular/core/testing';

import { Cancel } from './cancel';

describe('Cancel', () => {
  let service: Cancel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cancel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
