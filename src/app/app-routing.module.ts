import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegistroComponent } from 'src/app/components/user/registro/registro.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { BuscarPeComponent } from 'src/app/components/buscar-pe/buscar-pe.component';
import { ElaboracionPeComponent } from 'src/app/components/elaboracion-pe/elaboracion-pe.component';
import { ModificarPeComponent } from 'src/app/components/modificar-pe/modificar-pe.component';
import { PerfilUsuarioComponent } from 'src/app/components/user/perfil-usuario/perfil-usuario.component';

const routes : Routes = [

  { path: '', component: HomeComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/registro', component: RegistroComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'user/perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'modificar-pe', component: ModificarPeComponent},
  { path: 'elaboracion-pe', component: ElaboracionPeComponent},
  { path: 'buscar-pe', component: BuscarPeComponent}

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
