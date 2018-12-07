import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

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
import { HttpClientModule } from '@angular/common/http';

//Services
import {DataApiService} from 'src/app/services/data-api.service';

export function tokenGetter() { return localStorage.getItem('access_token'); }
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
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["http://localhost:4200","https://api.maindesign.mx"],
        blacklistedRoutes: ["http://localhost:4200/login"]
      }
    })
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
