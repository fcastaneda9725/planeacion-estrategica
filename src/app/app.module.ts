import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ElaboracionPeComponent } from './elaboracion-pe/elaboracion-pe.component';
import { ModificarPeComponent } from './modificar-pe/modificar-pe.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { BuscarPeComponent } from './buscar-pe/buscar-pe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    MenuComponent,
    ElaboracionPeComponent,
    ModificarPeComponent,
    PerfilUsuarioComponent,
    BuscarPeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
