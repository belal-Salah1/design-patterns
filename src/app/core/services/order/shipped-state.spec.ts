import { TestBed } from '@angular/core/testing';

import { ShippedState } from './shipped-state';

describe('ShippedState', () => {
  let service: ShippedState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippedState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
