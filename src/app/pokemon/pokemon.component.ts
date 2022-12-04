import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  pokemonNames = [];

  constructor(private http: HttpClient) {
    var u = this.getPokemonApiUrl(true);
    this.getPokemonNamesByPokemonTypes(u, 'ditto');
  }

  getPokemonApiUrl(useLastVersion) {
    if (useLastVersion === true) {
      return 'https://pokeapi.co/api/v2/pokemon/';
    } else {
      return 'https://pokeapi.co/api/v1/pokemon/';
    }
  }

  getPokemonNamesByPokemonTypes(url, pokemonName) {
    this.pokemonNames = [];
    this.http.get(url + pokemonName)
      .subscribe((data: any) => {
        for (var i = 0; i < data.types.length; i++) {
          var u = data.types[i].type.url;
          this.http.get(u)
            .subscribe((item: any) => {
              for (var j = 0; j < item.pokemon.length; j++) {
                var n = item.pokemon[j].pokemon.name;
                this.pokemonNames.push(n);
              }
            });
        }
      });
  }
}
