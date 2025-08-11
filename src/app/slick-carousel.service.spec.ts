import { TestBed } from '@angular/core/testing';

import { SlickCarouselService } from './slick-carousel.service';

describe('SlickCarouselService', () => {
  let service: SlickCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlickCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
