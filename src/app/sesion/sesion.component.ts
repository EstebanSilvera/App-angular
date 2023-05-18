import { Component, OnInit } from '@angular/core';
import { RegistrarComponent } from '../registrar/registrar.component';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})


export class SesionComponent implements OnInit {

  usuario = {
    email: '',
    password:''
  }
  
  ingresar(){
    let mostrar = JSON.parse(localStorage.getItem("registrar"));

    if (this.usuario.email == mostrar.email && this.usuario.password === mostrar.contraseña) {
      alert("bienvenido")
    }else{
      alert("registrate")
    }
  }

  constructor() { }

  ngOnInit() {

  }

}
