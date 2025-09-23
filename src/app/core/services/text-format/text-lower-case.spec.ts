import { TestBed } from '@angular/core/testing';

import { TextLowerCase } from './text-lower-case';

describe('TextLowerCase', () => {
  let service: TextLowerCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextLowerCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
