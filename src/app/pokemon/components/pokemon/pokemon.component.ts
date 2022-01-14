import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap, tap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
    `
    .cp {
      cursor: pointer;
      margin: 6px 0 12px 0;
    }
    .outline {
      /* outline: 2px #C2185B dashed; */
      background-color: #454545;
    }
    img {
      width: 100%;
    }
    .add__favorite {
      cursor: pointer;
    }
    `
  ]
})
export class PokemonComponent implements OnInit, OnDestroy {

  pokemon!: Pokemon;
  paramsSubscription!: Subscription;
  favorites: Pokemon[] = [];

  constructor( private activateRoute: ActivatedRoute,
               private pokemonService: PokemonService,
               private router: Router,
               private location: Location ) { }

  ngOnInit(): void {

    this.paramsSubscription = this.activateRoute.params
      .pipe(
        switchMap( param => this.pokemonService.getPokemonByName(param['name']) )
      )
      .subscribe( (pokemon: Pokemon) => {
        this.pokemon = pokemon;
      });

      this.favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  goBack() {
    // this.router.navigateByUrl('/pokemon/list');
    // this.router.navigate(['..']);
    this.location.back();
  }

  addFavorite() {
    this.favorites.push(this.pokemon);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

}
