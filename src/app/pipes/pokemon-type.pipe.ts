import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonType',
  standalone: true
})
export class PokemonTypePipe implements PipeTransform {

  transform(type: string | undefined, message?: string): string {
    const text = message ? message : 'Unavailable';
    return type === undefined ? text : type;
  }

}
