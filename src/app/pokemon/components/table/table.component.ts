import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/pokemon-result.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
    table {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: white;
     }

    `
  ]
})
export class TableComponent {

  @Input() pokemonsDisplayed: Result[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() pokemonImages: string[] = [];

  constructor() { }

}
