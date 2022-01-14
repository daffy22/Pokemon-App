import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { TableComponent } from './components/table/table.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    FavoritesComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    TableComponent,
    PokemonComponent,
    PokemonCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
