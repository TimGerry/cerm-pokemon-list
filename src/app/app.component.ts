import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, DatePipe, PokemonTypePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon List';
  today = new Date();
  pokemonList: Pokemon[] = [
    { id: 'bulbasaur', name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
    { id: 'bulbasaur',  name: 'squirtle', type: 'water', attack: 'water gun', level: 6 },
    { id: 'bulbasaur', name: 'charmander', type: 'fire', attack: 'ember', level: 5 }
  ];

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name}.avif`
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
