import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonModule } from '../pokemon.module';

fdescribe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;
  let el: HTMLElement;
  let pokemonSubmittedSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    pokemonSubmittedSpy = spyOn(component.pokemonSubmitted, 'emit');
    el = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', async () => {
    const typeInput = el.querySelector<HTMLInputElement>('input[id="typeInput"]')!;
    const attackInput = el.querySelector<HTMLInputElement>('input[id="attackInput"]')!;
    const submitBtn = el.querySelector<HTMLButtonElement>('form button')!;
    expect(submitBtn.disabled).toBeTrue();

    typeInput.value = 'water';
    typeInput.dispatchEvent(new InputEvent('input'));
    attackInput.value = 'water gun';
    attackInput.dispatchEvent(new InputEvent('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(submitBtn.disabled).toBeFalse();
    submitBtn.click();
    expect(pokemonSubmittedSpy).toHaveBeenCalled();
  });
});
