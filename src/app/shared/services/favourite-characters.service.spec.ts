import { TestBed } from '@angular/core/testing';

import { FavouriteCharactersService } from './favourite-characters.service';

describe('FavouriteCharactersService', () => {
  let service: FavouriteCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
