import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { FavCharactersComponent } from './fav-characters/fav-characters.component';
import { FavLocationsComponent } from './fav-locations/fav-locations.component';
import { DetailCharacterComponent } from './characters/pages/detail-character/detail-character.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'favCharacters', component: FavCharactersComponent},
  {path: 'favLocations', component: FavLocationsComponent},
  {path: 'characters/:id', component: DetailCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
