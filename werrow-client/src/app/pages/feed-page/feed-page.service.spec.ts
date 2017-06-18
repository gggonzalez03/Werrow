import { TestBed, inject } from '@angular/core/testing';

import { FeedPageService } from './feed-page.service';

describe('FeedPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedPageService]
    });
  });

  it('should be created', inject([FeedPageService], (service: FeedPageService) => {
    expect(service).toBeTruthy();
  }));
});
