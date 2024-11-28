import { HttpClient } from '@angular/common/http';
import { Injectable,signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable,of } from 'rxjs';
import { User } from '../interfaces/user';
import { ApiLumenService } from './api-lumen.service';
import { HttpParams  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService{

  usuarioBD:User={
    id:0,name:'',token:''
  };

  usuario=signal('');
  tokenServer = signal("");

  constructor(private localStorageService:LocalStorageService,private apiLumen:ApiLumenService) { }


  login(user: any,password:any){
    let parameters = new HttpParams();
    parameters=parameters.set('userName', user);
    parameters=parameters.set('password', password);
    return this.apiLumen.postData('loginUser',parameters);
  }


}
