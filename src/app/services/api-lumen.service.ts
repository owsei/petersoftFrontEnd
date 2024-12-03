import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';
import { Observable,firstValueFrom,forkJoin  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLumenService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiLumenUrl;

  // const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  public async getDataAsync(url:string,parameters:HttpParams): Promise<any> {
    return await this.http.get(environment.apiLumenUrl + url);
  }

  public async getDataJsonAsync(url:string): Promise<any> {
    return await this.http.get(url).toPromise();
  }

  public postData(url:any,parameters:HttpParams){
    this.http.post<any>(environment.apiLumenUrl + url,parameters).subscribe({
      next: data => {
        return data;
      },
      error: error => {
          return error;
      }
    })
  }

  public async postDataObservableAsync(url:any,parameters:HttpParams): Promise<any> {
    // console.log("Ruta back:"+environment.apiLumenUrl + url);
    return await this.http.post(environment.apiLumenUrl + url, parameters).toPromise();
  }






}
