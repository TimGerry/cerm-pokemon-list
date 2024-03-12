import { Component, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { LoadingComponent } from '../loading/loading.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [LoadingComponent],
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
