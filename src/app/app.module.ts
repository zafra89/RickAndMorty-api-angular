import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { CharactersPageComponent } from './characters-page/characters-page.component'; // para usar la api
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { FavCharactersComponent } from './fav-characters/fav-characters.component';
import { FavLocationsComponent } from './fav-locations/fav-locations.component';
import { DetailCharacterComponent } from './characters/pages/detail-character/detail-character.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MypipePipe } from './shared/shared-pipes/mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CharactersComponent,
    LocationsComponent,
    CharactersPageComponent,
    LocationsPageComponent,
    FavCharactersComponent,
    FavLocationsComponent,
    DetailCharacterComponent,
    ReactiveFormComponent,
    MypipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
