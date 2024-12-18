import * as CryptoJS from 'crypto-js';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

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
  userData:any;
  errorMessage:boolean=false;

  constructor(private userService:UsersService,private router:Router){
    if (typeof window !== 'undefined') {
      console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }
  }

  async login(){
    this.md5HashedPassword = CryptoJS.MD5(this.password).toString();
    try {
      // Espera a que la autenticación se complete
      const authResponse = await this.userService.login(this.nombreUsuario,this.md5HashedPassword);
      if (authResponse==null)
      {
        this.errorMessage=true;
      }
      else
      {
        //una vez autenticado nos movemos a principal
        this.errorMessage=false;
        this.router.navigate(['/home']);
      }

    } catch (error) {
      this.errorMessage=true;
    }



  }





}
