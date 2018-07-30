import { TestBed, inject } from '@angular/core/testing';

import { FetchCountryService } from './fetch-country.service';

describe('FetchCountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchCountryService]
    });
  });

  it('should be created', inject([FetchCountryService], (service: FetchCountryService) => {
    expect(service).toBeTruthy();
  }));
});
