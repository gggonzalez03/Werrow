import { TestBed, inject } from '@angular/core/testing';

import { LogoutButtonService } from './logout-button.service';

describe('LogoutButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutButtonService]
    });
  });

  it('should be created', inject([LogoutButtonService], (service: LogoutButtonService) => {
    expect(service).toBeTruthy();
  }));
});
