import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ServerUtilityService } from './server-utility.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServerUtilityService', () => {
  let service: ServerUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServerUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
