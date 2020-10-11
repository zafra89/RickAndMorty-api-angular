import { Component, OnInit, Input } from '@angular/core';
import { LocationsService } from '../shared/services/locations.service';
import { FavouriteCharactersService } from '../shared/services/favourite-characters.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  @Input() locations;
  constructor(private locationsService: LocationsService, private favouriteLocationsService: FavouriteCharactersService) { }

  ngOnInit() {
    this.locationsService.getLocations().subscribe((res: any) => {
      console.log(res.results);
      this.locations = res.results;
    });
  }

  addNewFavouriteLocation(location) {
    this.favouriteLocationsService.addNewFavouriteLocation(location);
    console.log(location);
  }
}