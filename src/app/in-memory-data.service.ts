import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: ' Homem-Aranha' },
      { id: 13, name: ' Homem de Ferro' },
      { id: 14, name: ' Pantera Negra' },
      { id: 15, name: ' Wolverine' },
      { id: 16, name: ' Capitão América' },
      { id: 17, name: ' Homem-Formiga' },
      { id: 18, name: ' Tempestade' },
      { id: 19, name: ' Viuva Negra' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
