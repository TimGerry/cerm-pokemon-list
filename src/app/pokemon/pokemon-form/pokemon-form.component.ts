import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, Form, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { POKEMON_TYPES, Pokemon } from '../models/pokemon.model';
import { catchError, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {
  @Output() pokemonSubmitted = new EventEmitter<Omit<Pokemon, 'id'>>();

  pokemonForm: FormGroup<PokemonForm>

  constructor(private nnfb: NonNullableFormBuilder) {
    this.pokemonForm = nnfb.group<PokemonForm>({
      name: nnfb.control('mudkip', [Validators.required, Validators.minLength(2)], [this.pokemonValidator()]),
      type: nnfb.control('', [Validators.required, this.pokemonTypeValidator()]),
      type2: nnfb.control('', this.pokemonTypeValidator()),
      attack: nnfb.control('', Validators.required),
      level: nnfb.control(5, [Validators.required, Validators.min(1), Validators.max(100)]),
    }, {
      validators: [this.duplicatePokemonTypeValidator()]
    });
  }

  submit() {
    this.pokemonSubmitted.emit({ ...this.pokemonForm.getRawValue(), level: 5 });
    this.pokemonForm.reset();
  }

  pokemonTypeValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const val = control.value;
      const valid = !val || POKEMON_TYPES.includes((val as string).toLowerCase());

      return valid ? null : { invalidType: val }
    }
  }

  duplicatePokemonTypeValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const type = control.get('type')?.value;
      const type2 = control.get('type2')?.value;
      const valid = type !== type2;

      return valid ? null : { duplicateType: type }
    }
  }

  pokemonValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const name = control.value;
      if (!name) return of(null);

      return ajax(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
        map(_ => {
          return null;
        }),
        catchError(_ => {
          return of({ invalidPokemon: name })
        })
      )
    }
  }
}

type PokemonForm = {
  [P in keyof Omit<Pokemon, 'id'>]: FormControl<Pokemon[P]>
}