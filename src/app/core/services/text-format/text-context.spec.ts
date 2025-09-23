import { TestBed } from '@angular/core/testing';

import { TextContext } from './text-context';

describe('TextContext', () => {
  let service: TextContext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
