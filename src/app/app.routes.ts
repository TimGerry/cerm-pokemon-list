import { Routes } from '@angular/router';
import { PokemonMainComponent } from './pokemon/pokemon-main/pokemon-main.component';
import { PokemonCenterComponent } from './pokemon-center/pokemon-center.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { pokemonResolver } from './resolvers/pokemon.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonMainComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent, resolve: { pokemon: pokemonResolver } },
  { path: 'pokemon-center', component: PokemonCenterComponent }
];
