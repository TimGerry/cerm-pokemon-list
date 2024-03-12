import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const BASE_URL = 'http://localhost:3000/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(BASE_URL).pipe(
      map(data => data.map(p => ({ ...p, type: p.type.toLowerCase(), type2: p.type2?.toLowerCase() })))
    );
  }

  add(pokemon: Pokemon): Observable<void> {
    return this.http.post<void>(BASE_URL, pokemon);
  }
}
