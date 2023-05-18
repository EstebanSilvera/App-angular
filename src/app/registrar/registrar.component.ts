import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formgroup:FormGroup;
  
  constructor(public formulario:FormBuilder) {
    
    this.formgroup = this.formulario.group({
      email:[''],
      contraseña:['']
    })
    
  }
  
  
  ngOnInit() {
  }

  enviardatos(){
    console.log("me presionaste");
    console.log(this.formgroup.value)

    localStorage.setItem("registrar", JSON.stringify(this.formgroup.value) )
  }

}
