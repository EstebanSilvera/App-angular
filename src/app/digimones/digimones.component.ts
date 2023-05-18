import { Component, OnInit } from '@angular/core';
import { DigimonesService } from './digimones.service';

@Component({
  selector: 'app-digimones',
  templateUrl: './digimones.component.html',
  styleUrls: ['./digimones.component.css']
})
export class DigimonesComponent implements OnInit {

  digimones:any;

  constructor(public digimon:DigimonesService) { }

  ngOnInit(){
    this.digimon.getDigimones().subscribe
    (
      (r)=> {this.digimones =r; console.log(r)},
      (e) => {console.error(e)}
    )
  }

}
