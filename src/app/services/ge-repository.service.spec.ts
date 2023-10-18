import { TestBed } from '@angular/core/testing';

import { GERepositoryService } from './ge-repository.service';

describe('GeRepositoryService', () => {
  let service: GERepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GERepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
