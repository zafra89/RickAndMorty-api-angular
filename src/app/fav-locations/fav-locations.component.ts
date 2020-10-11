import { Component, OnInit, Input } from '@angular/core';
import { FavouriteCharactersService } from '../shared/services/favourite-characters.service';

@Component({
  selector: 'app-fav-locations',
  templateUrl: './fav-locations.component.html',
  styleUrls: ['./fav-locations.component.scss']
})
export class FavLocationsComponent implements OnInit {

  @Input() favLocations;

  constructor(private favouriteLocationsService: FavouriteCharactersService) { }

  ngOnInit() {
    this.favLocations = this.favouriteLocationsService.getFavouriteLocations();
  }
}
