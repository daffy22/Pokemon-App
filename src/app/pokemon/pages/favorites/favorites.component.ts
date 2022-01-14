import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [
  ]
})
export class FavoritesComponent implements OnInit {

  myFavorites: Pokemon[] = [];

  constructor( private location: Location ) { }

  ngOnInit(): void {
    this.myFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    console.log(this.myFavorites);
  }

  goBack() {
    this.location.back();
  }

}
