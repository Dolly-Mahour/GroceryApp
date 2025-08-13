import { TestBed } from '@angular/core/testing';

import { ItemsInWishlistService } from './items-in-wishlist.service';

describe('ItemsInWishlistService', () => {
  let service: ItemsInWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsInWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
