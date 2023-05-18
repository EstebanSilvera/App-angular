import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
  })

export class PokemonesService{
    private API_SERVER = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"

    constructor(){}

    getPokemones(){
        return axios.get(this.API_SERVER)
    }
}