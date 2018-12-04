import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { RegistroComponent } from '../app/registro/registro.component';
import { HomeComponent } from '../app/home/home.component';
import { MenuComponent } from '../app/menu/menu.component';
import { BuscarPeComponent } from '../app/buscar-pe/buscar-pe.component';
import { ElaboracionPeComponent } from '../app/elaboracion-pe/elaboracion-pe.component';
import { ModificarPeComponent } from '../app/modificar-pe/modificar-pe.component';
import { PerfilUsuarioComponent } from '../app/perfil-usuario/perfil-usuario.component';

const routes : Routes = [

  { path: 'perfil-usuario', component: PerfilUsuarioComponent},
  { path: 'modificar-pe', component: ModificarPeComponent},
  { path: 'elaboracion-pe', component: ElaboracionPeComponent},
  { path: 'buscar-pe', component: BuscarPeComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
