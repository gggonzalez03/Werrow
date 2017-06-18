import { TestBed, inject } from '@angular/core/testing';

import { UserProfilePageService } from './user-profile-page.service';

describe('UserProfilePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfilePageService]
    });
  });

  it('should be created', inject([UserProfilePageService], (service: UserProfilePageService) => {
    expect(service).toBeTruthy();
  }));
});
