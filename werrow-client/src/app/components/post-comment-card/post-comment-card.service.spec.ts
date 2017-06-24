import { TestBed, inject } from '@angular/core/testing';

import { PostCommentCardService } from './post-comment-card.service';

describe('PostCommentCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostCommentCardService]
    });
  });

  it('should be created', inject([PostCommentCardService], (service: PostCommentCardService) => {
    expect(service).toBeTruthy();
  }));
});
