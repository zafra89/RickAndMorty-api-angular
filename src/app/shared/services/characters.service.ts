import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(environment.url + 'character/');
  };

  getcharacterDetails(id) {
    return this.httpClient.get(environment.url + 'character/' + id);
  }

  getFilteredCharacter(name) {
    return this.httpClient.get(environment.url + 'character/?name=' + name);
  }

  getFilteredSpecies(species) {
    return this.httpClient.get(environment.url + 'character/?species=' + species);
  }
}