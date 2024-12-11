import { TestBed } from '@angular/core/testing';

import { AppSeriveService } from './app-serive.service';

describe('AppSeriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSeriveService = TestBed.get(AppSeriveService);
    expect(service).toBeTruthy();
  });
});
