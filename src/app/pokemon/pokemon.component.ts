import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  pokemonNames: string[] = [];

  constructor(private http: HttpClient) {
    this.getPokemonNamesByPokemonTypes('ditto');
  }

  private getPokemonApiUrl(useLastVersion: boolean): string {
    const apiVersion = useLastVersion ? 'v2' : 'v1';
    return 'https://pokeapi.co/api/' + apiVersion + '/pokemon/';
  }

  getPokemonNamesByPokemonTypes(pokemonName: string) {
    const url = this.getPokemonApiUrl(true);

    this.http.get(url + pokemonName)
      .pipe(
        mergeMap((pokemon: any) =>
          forkJoin(pokemon.types.map((pokemonType: any) =>
            this.http.get(pokemonType.type.url)
          ))
        ),
        map((pokemonTypes: any) =>
          pokemonTypes
            .map((type: any) => type.pokemon)
            .flat()
            .map((pokemon: any) => pokemon.pokemon.name)
        )
      )
      .subscribe(pokemonNames => {
        this.pokemonNames = pokemonNames;
      });
  }
}
