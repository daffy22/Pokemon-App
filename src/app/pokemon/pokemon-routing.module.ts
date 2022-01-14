import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'search', component: SearchComponent },
      { path: 'view/:name', component: PokemonComponent },
      { path: '**', redirectTo: 'list' },
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
