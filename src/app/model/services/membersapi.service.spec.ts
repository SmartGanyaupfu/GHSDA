import { TestBed } from '@angular/core/testing';

import { MembersapiService } from './membersapi.service';

describe('MembersapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembersapiService = TestBed.get(MembersapiService);
    expect(service).toBeTruthy();
  });
});
