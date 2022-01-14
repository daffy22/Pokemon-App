import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResult, Result } from '../../interfaces/pokemon-result.interface';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  pokemonResult!    : PokemonResult;
  displayedColumns  : string[] = ['position', 'name', 'image', 'url', 'go'];
  pokemonsDisplayed : Result[] = [];
  pokemonImages     : string[] = [];

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent!: PageEvent;

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {

    this.pokemonService.getPokemons()
      .subscribe( resp => {
        this.pokemonResult = resp;
        this.pokemonsDisplayed = this.pokemonResult.results;

        this.pokemonsDisplayed.forEach(pokemon => {
          // algunos id de los pokemon de toman con el '/2', '/3' '/4'
          const id = pokemon.url.substring( pokemon.url.length - 3, pokemon.url.length - 1);
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
          this.pokemonImages.push( imgUrl );
        });

      });

  }


  changePage( event: PageEvent ) {
    this.pageEvent = event;
    // this.pageEvent.length = Number(this.pokemonResult.next);
    console.log(this.pageEvent);
  }


}
