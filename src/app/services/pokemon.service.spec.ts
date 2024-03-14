import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { lastValueFrom, of } from 'rxjs';
import { Pokemon } from '../pokemon/models/pokemon.model';

describe('PokemonService', () => {
  let http: HttpTestingController;
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should get', async () => {
    const expected: Pokemon = { id: 'mudkip', name: 'Mudkip', type: 'water', attack: 'water gun ', level: 5};

    const act = lastValueFrom(service.get('mudkip'));
    http.expectOne('http://localhost:3000/pokemon/mudkip').flush(expected);

    expect(await act).toEqual(expected);
  });
});
