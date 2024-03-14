import { Routes } from '@angular/router';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { pokemonResolver } from '../resolvers/pokemon.resolver';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

export const pokemonRoutes: Routes = [
  { path: '', component: PokemonMainComponent },
  { path: ':id', component: PokemonDetailComponent, resolve: { pokemon: pokemonResolver } }
];
