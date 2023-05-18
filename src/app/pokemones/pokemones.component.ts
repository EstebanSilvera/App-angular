import { Component, OnInit } from '@angular/core';
import { PokemonesService } from './pokemones.service';
import axios from 'axios';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})


export class PokemonesComponent implements OnInit {
  
  pokemones: any;

  constructor( public pokemon:PokemonesService) { }

  ngOnInit() {
    this.pokemon.getPokemones()
    .then(response => response.data.results )
    .then(data => data.map(r => {
      axios.get(r.url)
      .then(results => this.pokemones = results.data)
    }))
    
    console.log(this.pokemones)
  }


}
