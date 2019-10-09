import { TestBed } from '@angular/core/testing';

import { ZonkyService } from './zonky.service';

describe('ZonkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZonkyService = TestBed.get(ZonkyService);
    expect(service).toBeTruthy();
  });
});
