import { TestBed } from '@angular/core/testing';

import { CRUD1Service } from './crud1.service';

describe('CRUD1Service', () => {
  let service: CRUD1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUD1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
