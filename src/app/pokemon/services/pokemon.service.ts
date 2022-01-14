import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PokemonResult } from '../interfaces/pokemon-result.interface';
import { Pokemon } from '../interfaces/pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getPokemons() {

    const url: string = `${ this._baseUrl }/pokemon`;

    return this.http.get<PokemonResult>(url);
  }

  getPokemonByName( name: string): Observable<Pokemon> {

    const url: string = `${ this._baseUrl }/pokemon/${ name }`;

    return this.http.get<Pokemon>(url);
  }


}
