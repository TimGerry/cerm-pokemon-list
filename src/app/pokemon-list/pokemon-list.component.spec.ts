import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pokemon list', async () => {
    const expectedPokemon = [
      { name: 'pokemon 1', type: 'fire', attack: 'attack', level: 1, id: ''},
      { name: 'pokemon 2', type: 'fire', attack: 'attack', level: 1, id: ''},
      { name: 'pokemon 3', type: 'fire', attack: 'attack', level: 1, id: ''},
      { name: 'pokemon 4', type: 'fire', attack: 'attack', level: 1, id: ''},
    ];
    component.pokemonList = expectedPokemon;

    fixture.detectChanges();
    await fixture.whenStable();

    const actualPokemonList = el.querySelectorAll('tbody tr');
    expect(actualPokemonList).toHaveSize(expectedPokemon.length);
  });

  it('should test async 1', async () => {
    let x = 1;
    await new Promise<void>(resolve => {
      setTimeout(() => {
        x = 2;
        resolve();
      })
    });
    expect(x).toBe(2);
  })
});
