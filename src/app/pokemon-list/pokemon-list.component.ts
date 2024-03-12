import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonTypePipe } from '../pipes/pokemon-type.pipe';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonTypePipe, AsyncPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemon$!: Observable<Pokemon[]>;

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name.toLowerCase()}.avif`;
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
