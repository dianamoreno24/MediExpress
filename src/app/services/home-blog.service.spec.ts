import { TestBed } from '@angular/core/testing';

import { HomeBlogService } from './home-blog.service';

describe('HomeBlogService', () => {
  let service: HomeBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
