import * as CryptoJS from 'crypto-js';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  nombreUsuario:any;
  password:any;
  md5HashedPassword:any;
  token:any;

  constructor(private userService:UsersService){}

  login(){
    console.log('Pulsado');
    console.log('Nombre de usuario:'+this.nombreUsuario);

    this.md5HashedPassword = CryptoJS.MD5(this.password).toString();
    console.log('Contraseña cifrada con MD5:', this.md5HashedPassword);
    console.log('Password:'+this.password);

    let user= this.userService.login(this.nombreUsuario,this.md5HashedPassword);

  }


}
