import { TestBed } from '@angular/core/testing';

import { NullNotification } from './null-notification';

describe('NullNotification', () => {
  let service: NullNotification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NullNotification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
