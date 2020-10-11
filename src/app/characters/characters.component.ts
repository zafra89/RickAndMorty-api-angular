import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';
import { FavouriteCharactersService } from '../shared/services/favourite-characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

 @Input() characters;

  constructor(private charactersService: CharactersService, private favouriteCharactersService: FavouriteCharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((res: any) => {
      this.characters = res.results;
    });
  }

  addNewFavouriteCharacter(character) {
    this.favouriteCharactersService.addNewFavouriteCharacter(character);
  }

  searchCharacter(e) {
    this.charactersService.getFilteredCharacter(e.name).subscribe((res:any) => {
      console.log(res);
      this.characters = res.results;
    });
  }

  searchSpecies(e) {
    this.charactersService.getFilteredSpecies(e.species).subscribe((res:any) => {
      console.log(res);
      this.characters = res.results;
    });
  }
}