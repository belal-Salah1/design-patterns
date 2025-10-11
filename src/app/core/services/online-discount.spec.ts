import { TestBed } from '@angular/core/testing';

import { OnlineDiscount } from './online-discount';

describe('OnlineDiscount', () => {
  let service: OnlineDiscount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineDiscount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
