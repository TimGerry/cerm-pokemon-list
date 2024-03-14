import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon/models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

const BASE_URL = 'http://localhost:3000/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSubject: BehaviorSubject<Pokemon[]>;
  private pokemon$: Observable<Pokemon[]>

  constructor(private http: HttpClient) {
    this.pokemonSubject = new BehaviorSubject<Pokemon[]>([]);
    this.next();
    this.pokemon$ = this.pokemonSubject.asObservable();
  }

  getPokemon$() {
    return this.pokemon$;
  }

  get(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${BASE_URL}${id}`);
  }

  train({ id, ...pokemonData }: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${BASE_URL}${id}`, { ...pokemonData, level: pokemonData.level + 1 })
      .pipe(tap(_ => this.next()));
  }

  add(pokemon: Omit<Pokemon, 'id'>) {
    this.http.post<void>(BASE_URL, { ...pokemon, id: pokemon.name }).subscribe(() => this.next());
  }

  next = () => {
    this.getAll().subscribe(data => this.pokemonSubject.next(data));
  }

  private getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(BASE_URL).pipe(
      map(data => data.map(p => ({ ...p, type: p.type.toLowerCase(), type2: p.type2?.toLowerCase() })))
    );
  }
}
