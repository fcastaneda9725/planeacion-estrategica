import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string;
  private urlGeneral: string;

  constructor( private http: HttpClient) {
    this.url ="https://api.maindesign.mx/api/v1/users";
    this.urlGeneral = "https://api.maindesign.mx/api/v1";
  }

  Me(){
    return this.http.get<{acces_token:string}>(this.url + '/me');
  }

  updateMe(user){
    return this.http.put<{acces_token:string}>(this.url + '/me', user);
  }

  Logout(){
    return this.http.post<{acces_token:string}>(this.url + '/logout', null);
  }
}
