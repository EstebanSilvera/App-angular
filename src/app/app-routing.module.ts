import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonesComponent } from './digimones/digimones.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SesionComponent } from './sesion/sesion.component';
import { PokemonesComponent } from './pokemones/pokemones.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'informacion', component:InformacionComponent},
  {path:'sesion', component:SesionComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'digimones', component:DigimonesComponent},
  {path:'pokemones', component:PokemonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
