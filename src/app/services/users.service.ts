import { HttpClient } from '@angular/common/http';
import { Injectable,signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable,firstValueFrom, forkJoin } from 'rxjs';
import { User } from '../interfaces/user';
import { ApiLumenService } from './api-lumen.service';
import { HttpParams  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService{

  usuarioBD:User={
    id:0,name:'',token:'',userid:''
  };

  usuario=signal<User>({id:0,name:'',token:'',userid:''});
  usuarioInicial=({id:0,name:'',token:'',userid:''});

  tokenServer = signal("");
  requestOne:any;

  constructor(private localStorageService:LocalStorageService,private apiLumen:ApiLumenService) {
    let storedUser:any;
    if (typeof window !== 'undefined') {
      storedUser = this.localStorageService.getItem('usuario');
      this.usuario.set(storedUser);
    }
  }

  async login(user: any,password:any): Promise<any> {
    let parameters = new HttpParams()
      .set('userName', user)
      .set('password', password);

     try{
      const response= await this.apiLumen.postDataObservableAsync('loginUser',parameters);
      this.usuario.set(response);
      this.localStorageService.setItem("usuario",response);
      return response;
     }
     catch(error){
      console.log(error);
     }
    }

    cerrarSesion(){
      this.usuario.set(this.usuarioInicial);
      this.localStorageService.removeItem('usuario');
    }


}
