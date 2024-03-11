import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonTypePipe } from '../pipes/pokemon-type.pipe';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonTypePipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name}.avif`
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
