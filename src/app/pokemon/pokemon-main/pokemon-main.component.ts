import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent {
  pokemon$: Observable<Pokemon[]> | undefined;

  constructor(private service: PokemonService) { 
    this.pokemon$ = service.pokemon$;
  }

  submit(pokemonToAdd: Omit<Pokemon, 'id'>) {
    this.service.add(pokemonToAdd);
  }
}
