import { TestBed } from '@angular/core/testing';

import { DerivedState } from './derived-state';

describe('DerivedState', () => {
  let service: DerivedState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerivedState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
