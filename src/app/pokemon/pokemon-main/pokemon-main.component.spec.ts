import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMainComponent } from './pokemon-main.component';
import { PokemonModule } from '../pokemon.module';
import { PokemonService } from '../../services/pokemon.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('PokemonMainComponent', () => {
  let component: PokemonMainComponent;
  let fixture: ComponentFixture<PokemonMainComponent>;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;
  let el: HTMLElement;

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj(PokemonService, ['getPokemon$']);
    const expectedPokemon = [
      { name: 'pokemon 1', type: 'fire', attack: 'attack', level: 1, id: '' },
      { name: 'pokemon 2', type: 'fire', attack: 'attack', level: 1, id: '' },
      { name: 'pokemon 3', type: 'fire', attack: 'attack', level: 1, id: '' },
      { name: 'pokemon 4', type: 'fire', attack: 'attack', level: 1, id: '' },
    ];
    pokemonServiceSpy.getPokemon$.and.returnValue(of(expectedPokemon));

    await TestBed.configureTestingModule({
      imports: [PokemonModule],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy },
        { provide: ActivatedRoute, useValue: null }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonMainComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pokemon', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const appPokemonList = el.querySelector('app-pokemon-list');
    expect(appPokemonList).not.toBe(null);
    const actualPokemon = appPokemonList?.querySelectorAll('tbody tr');
    expect(actualPokemon).toHaveSize(4);
  });
});
