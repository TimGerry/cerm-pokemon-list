import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon List';
  pokemonList = [
    { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
    { name: 'squirtle', type: 'water',  attack: 'water gun', level: 6 },
    { name: 'charmander', type: 'fire', attack: 'ember', level: 5 }
  ];

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name}.avif`
  }

  attack(pokemon: any) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
