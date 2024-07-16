import { TestBed } from '@angular/core/testing';

import { SetbaseurlService } from './setbaseurl.service';

describe('SetbaseurlService', () => {
  let service: SetbaseurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetbaseurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
