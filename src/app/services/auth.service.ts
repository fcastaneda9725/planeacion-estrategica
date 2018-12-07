import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUnderfined } from 'util';

import { UserInterface } from '../models/user-interface';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  interface user {
    email: string;
    password: string;
  }
  

  constructor(private http: HttpClient,
  private userProvider: UsersService) { }

 login(user.email, user.password){
   const url_api= "https://api.maindesign.mx/api/v1/users/login";
   return this.http.post<{acces_token: string}>(url_api,{user})
 }
  getToken(): boolean{
    return localStorage.getItem('accessToken') !== null;
  }
  logout(){
    const url_api= "https://api.maindesign.mx/api/v1/users/logout?acces_token=${accessToken}";
    this.userProvider.Logout().subscribe(res =>{
      console.log(res);
    });
    localStorage.removeITem("acces_token");
    return true;
  }
}
