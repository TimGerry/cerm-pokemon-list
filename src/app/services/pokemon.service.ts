import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonList: Pokemon[] = [
    { id: 'bulbasaur', name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
    { id: 'bulbasaur', name: 'squirtle', type: 'water', attack: 'water gun', level: 6 },
    { id: 'bulbasaur', name: 'charmander', type: 'fire', attack: 'ember', level: 5 }
  ];

  constructor() { }

  getAll() {
    return this.pokemonList;
  }

  add(pokemon: Pokemon) {
    this.pokemonList.push(pokemon);
  }
}
