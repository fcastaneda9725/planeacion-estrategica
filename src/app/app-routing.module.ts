import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { RegistroComponent } from '../app/registro/registro.component';

const routes : Routes = [

  { path: '', component: LoginComponent }
  { path: 'registro', component: RegistroComponent }

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
