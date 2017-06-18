import { TestBed, inject } from '@angular/core/testing';

import { CreatePostFormService } from './create-post-form.service';

describe('CreatePostFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatePostFormService]
    });
  });

  it('should be created', inject([CreatePostFormService], (service: CreatePostFormService) => {
    expect(service).toBeTruthy();
  }));
});
