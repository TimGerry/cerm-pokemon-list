import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, DatePipe, PokemonTypePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon List';
  today = new Date();
  pokemonList: Pokemon[] = [
    { id: 'bulbasaur', name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 5 },
    { id: 'bulbasaur', name: 'squirtle', type: 'water', attack: 'water gun', level: 6 },
    { id: 'bulbasaur', name: 'charmander', type: 'fire', attack: 'ember', level: 5 }
  ];

  pokemonForm: Pokemon = {
    id: '',
    name: '',
    type: '',
    type2: '',
    attack: '',
    level: 5
  }

  submit(form: NgForm) {
    const pokemonToAdd = { ...this.pokemonForm, id: this.pokemonForm.name };
    this.pokemonList.push(pokemonToAdd);
    form.reset();
  }

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name}.avif`
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
