import { TestBed } from '@angular/core/testing';

import { RealNotification } from './real-notification';

describe('RealNotification', () => {
  let service: RealNotification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealNotification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
