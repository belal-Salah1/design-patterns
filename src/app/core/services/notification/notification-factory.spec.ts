import { TestBed } from '@angular/core/testing';

import { NotificationFactory } from './notification-factory';

describe('NotificationFactory', () => {
  let service: NotificationFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
