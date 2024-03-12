import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { LoadingComponent } from '../loading/loading.component';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [PokemonListComponent, PokemonFormComponent, LoadingComponent],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = this.service.getAll();
  }

  submit(pokemonToAdd: Pokemon) {
    this.service.add(pokemonToAdd);
  }
}
