import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteCharactersService {

  private favCharacters = [];
  private favLocations = [];

  constructor() { }

  addNewFavouriteCharacter(newFavouriteCharacters) {
    this.favCharacters.push(newFavouriteCharacters);
  }

  getFavouriteCharacters() {
    return this.favCharacters;
  }

  addNewFavouriteLocation(newFavouriteLocation) {
    this.favLocations.push(newFavouriteLocation);
  }

  getFavouriteLocations() {
    return this.favLocations;
  }

}
