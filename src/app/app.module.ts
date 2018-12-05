import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { PerfilUsuarioComponent } from './components/user/perfil-usuario/perfil-usuario.component';
import { MenuComponent } from './components/menu/menu.component';
import { ElaboracionPeComponent } from './components/elaboracion-pe/elaboracion-pe.component';
import { ModificarPeComponent } from './components/modificar-pe/modificar-pe.component';
import { BuscarPeComponent } from './components/buscar-pe/buscar-pe.component';

import { FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http/src/module';

//Services
import {DataApiService} from 'src/app/services/data-api.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    RegistroComponent,
    MenuComponent,
    ElaboracionPeComponent,
    ModificarPeComponent,
    BuscarPeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
