import { Usuario } from './usuario';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario:Usuario = new Usuario() ;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  fazerLogin(){
    this.loginService.fazerLogin(this.usuario);
  }

}
