import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  pokemon: Pokemon | undefined;

  // @Input() set id(id: string) {
  //   this.service.get(id).subscribe(data => this.pokemon = data);
  // }

  constructor(private route: ActivatedRoute) {
    route.data.subscribe(data => this.pokemon = data['pokemon'])
  }

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name.toLowerCase()}.avif`;
  }
}
