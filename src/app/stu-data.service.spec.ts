import { TestBed } from '@angular/core/testing';

import { StuDataService } from './stu-data.service';

describe('StuDataService', () => {
  let service: StuDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
