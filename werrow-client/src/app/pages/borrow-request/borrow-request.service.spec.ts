import { TestBed, inject } from '@angular/core/testing';

import { BorrowRequestService } from './borrow-request.service';

describe('BorrowRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorrowRequestService]
    });
  });

  it('should be created', inject([BorrowRequestService], (service: BorrowRequestService) => {
    expect(service).toBeTruthy();
  }));
});
