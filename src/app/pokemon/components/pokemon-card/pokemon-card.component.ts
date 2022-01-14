import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px;
    }
    `
  ]
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  @Input() favorites!: Pokemon[];
  // TODO: traer a travez de un input los favoritos del localstorage
  // cuando se elimine a travez del operador spret emitirlos al componente
  // padre con el output

  constructor() { }

  removeFavorite() {
    const id = this.favorites.indexOf(this.pokemon);
    this.favorites.splice(id, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

}
