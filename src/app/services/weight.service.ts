import { UsersService } from './users.service';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { ApiLumenService } from './api-lumen.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  constructor(private apiLumenService:ApiLumenService,private usersService:UsersService) { }


  async getWeight(idUser:any){
    let parameters = new HttpParams()
      .set('idUser',idUser)
      // .set('token',this.usersService.usuario().token)

    const data= await this.apiLumenService.getDataAsync('getWeight',parameters);
    return data;
  }

  async getWeightForGraphic(idUser:any){
    let parameters = new HttpParams()
      .set('idUser',idUser)

    const data= await this.apiLumenService.getDataAsync('getWeightForGraphic',parameters);
    return data;
  }

  async insertWeight(idUser:any,date:any,weight:any){

    let parameters = new HttpParams()
      .set('idUser',idUser)
      .set('dateInsert', date)
      .set('weightInsert', weight);

     try{
      const response= await this.apiLumenService.postDataObservableAsync('insertWeight',parameters);
      return response;
     }
     catch(error){
      console.log(error);
     }
    }
}
