import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent implements OnInit {
  pokemon$: Observable<Pokemon[]> | undefined;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.updateData();
  }

  submit(pokemonToAdd: Pokemon) {
    this.service.add(pokemonToAdd).subscribe(() => this.updateData());
  }

  private updateData() {
    this.pokemon$ = this.service.getAll();
  }
}
