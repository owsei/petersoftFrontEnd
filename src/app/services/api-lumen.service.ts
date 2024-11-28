import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLumenService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiLumenUrl;
  // const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  parameters = new HttpParams();


  // public getData(url:any,params:string): Observable<any> {
  //   const parameters = new HttpParams().set('param', params);
  //   return this.http.get(environment.apiLumenUrl + url,params:parameters);
  // }


  public postData(url:any,parameters:HttpParams){


    this.http.post<any>(
      environment.apiLumenUrl + url,
      parameters
    ).subscribe({
      next: data => {
        console.log(data);
        return data;
      },
      error: error => {
          console.error('There was an error!', error);
      }
  })
  }






}
