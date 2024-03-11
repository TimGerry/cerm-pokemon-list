import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCenterComponent } from './pokemon-center.component';

describe('PokemonCenterComponent', () => {
  let component: PokemonCenterComponent;
  let fixture: ComponentFixture<PokemonCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
