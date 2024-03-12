import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {
  @Output() pokemonSubmitted = new EventEmitter<Omit<Pokemon, 'id'>>();

  pokemonForm: Omit<Pokemon, 'id'> = {
    name: '',
    type: '',
    type2: '',
    attack: '',
    level: 5
  }

  submit(form: NgForm) {
    this.pokemonSubmitted.emit({ ...this.pokemonForm, level: 5});
    form.reset();
  }
}
