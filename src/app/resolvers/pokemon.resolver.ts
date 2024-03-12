import { ResolveFn } from '@angular/router';
import { Pokemon } from '../pokemon/models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { inject } from '@angular/core';

export const pokemonResolver: ResolveFn<Pokemon> = (route, state) => {
  const service = inject(PokemonService);
  return service.get(route.paramMap.get('id')!);
};
