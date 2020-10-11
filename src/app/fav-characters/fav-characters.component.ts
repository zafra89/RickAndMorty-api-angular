import { Component, OnInit } from '@angular/core';
import { FavouriteCharactersService } from '../shared/services/favourite-characters.service';

@Component({
  selector: 'app-fav-characters',
  templateUrl: './fav-characters.component.html',
  styleUrls: ['./fav-characters.component.scss']
})
export class FavCharactersComponent implements OnInit {

  favouriteCharacters;

  constructor(private favouriteCharactersService: FavouriteCharactersService) { }

  ngOnInit() {
    this.favouriteCharacters = this.favouriteCharactersService.getFavouriteCharacters();
  }
}
