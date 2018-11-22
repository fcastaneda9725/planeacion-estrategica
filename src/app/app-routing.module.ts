import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { RegistroComponent } from '../app/registro/registro.component';
import { HomeComponent } from '../app/home/home.component';

const routes : Routes = [

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
