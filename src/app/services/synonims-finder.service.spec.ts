import { TestBed, inject } from '@angular/core/testing';

import { SynonimsFinderService } from './synonims-finder.service';

describe('SynonimsFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynonimsFinderService]
    });
  });

  it('should be created', inject([SynonimsFinderService], (service: SynonimsFinderService) => {
    expect(service).toBeTruthy();
  }));
});
