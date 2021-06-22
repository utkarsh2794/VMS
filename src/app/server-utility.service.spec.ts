import { TestBed } from '@angular/core/testing';

import { ServerUtilityService } from './server-utility.service';

describe('ServerUtilityService', () => {
  let service: ServerUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
