import { TestBed } from '@angular/core/testing';

import { MainScreenServiceService } from './main-screen-service.service';

describe('MainScreenServiceService', () => {
  let service: MainScreenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainScreenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
