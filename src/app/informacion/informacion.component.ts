import { Component, OnInit } from '@angular/core';

export interface personal{
  position:number;
  nombre:String;
  edad:number;
  correo:String;
}

const datos: personal[] = [
  {position: 1 ,nombre:'esteban', edad: 22 , correo: 'esteban@gmail.com'},
  {position: 2 ,nombre:'andres', edad: 50 , correo: 'andres@gmail.com'},
];


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})

export class InformacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataSource = datos;
}
