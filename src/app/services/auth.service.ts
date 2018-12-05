import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUnderfined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
headers: HttpHeaders = new HttpHeaders({
  "Content-Type": "application/json"
});

registerUser(name: string, email: string, password: string){
  const url_api= ''
}

  setToken(){
    
  }
  getToken(){
    return "token";
  }
}
