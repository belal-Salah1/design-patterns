import { TestBed } from '@angular/core/testing';

import { TextUpperCase } from './text-upper-case';

describe('TextUpperCase', () => {
  let service: TextUpperCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextUpperCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
