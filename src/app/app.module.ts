import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './components/user/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ElaboracionPeComponent } from './components/elaboracion-pe/elaboracion-pe.component';
import { ModificarPeComponent } from './components/modificar-pe/modificar-pe.component';
import { PerfilUsuarioComponent } from './components/user/perfil-usuario/perfil-usuario.component';
import { BuscarPeComponent } from './components/buscar-pe/buscar-pe.component';

import { FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http/src/module';

//Services
import {DataApiService} from 'src/app/services/data-api.service';
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
