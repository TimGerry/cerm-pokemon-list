import { Component, OnDestroy } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscriber, Subscription, interval, switchMap, takeUntil } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnDestroy {
  pokemon: Pokemon | undefined;
  destroyable$ = new Subject<void>();

  // @Input() set id(id: string) {
  //   this.service.get(id).subscribe(data => this.pokemon = data);
  // }

  constructor(private service: PokemonService, private route: ActivatedRoute) {
    route.data.subscribe(data => this.pokemon = data['pokemon'])
  }

  getPokemonImage(name: string) {
    return `https://img.pokemondb.net/artwork/avif/${name.toLowerCase()}.avif`;
  }

  train() {
    interval(1000).pipe(
      takeUntil(this.destroyable$),
      switchMap(x => this.service.train(this.pokemon!))
    ).subscribe(data => this.pokemon = data);
  }

  ngOnDestroy(): void {
    this.destroyable$.next();
    this.destroyable$.complete();
  }
}
