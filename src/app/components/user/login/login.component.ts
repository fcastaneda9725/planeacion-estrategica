import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: boolean;

  constructor(private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  public login(email, password){
    this.auth.login(email, password).suscribe(
      response=>{
        console.log(response)
        localStorage.setItem("acces_token",response.acces_token);
        this.router.navigate(['/menu']);
        this.error= false;
      },
      error=>{
        console.log(error.error);
        this.error=true;
      }
    )
  }
}
