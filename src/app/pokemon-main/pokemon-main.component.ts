import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [PokemonListComponent, PokemonFormComponent, LoadingComponent],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;

  submit(pokemonToAdd: Pokemon) {
    this.pokemonList!.push(pokemonToAdd);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.pokemonList = [
        { id: 'bulbasaur', name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
        { id: 'bulbasaur', name: 'squirtle', type: 'water', attack: 'water gun', level: 6 },
        { id: 'bulbasaur', name: 'charmander', type: 'fire', attack: 'ember', level: 5 }
      ];
    }, 1000);
  }
}
