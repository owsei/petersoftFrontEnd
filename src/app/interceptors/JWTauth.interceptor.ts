import { HttpEvent, HttpHandlerFn, HttpRequest,HttpInterceptor,  HttpHandler } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { UsersService } from "../services/users.service";


export function JWTauthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  var userService= inject(UsersService);

  var usuario=userService.usuario();

  if(usuario.token && usuario.token!=null)
  {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: usuario.token
      }
    });
    return next(clonedRequest);
  }


  console.log("Desde interceptor"+req.params);
  console.log("Desde interceptor Usuario"+ usuario);
  // console.log(req.url);
  return next(req);
}
// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class JWTauthInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // Clonar la solicitud para agregar un encabezado personalizado
//     // const clonedRequest = req.clone({
//     //   setHeaders: {
//     //     Authorization: `Bearer my-token`
//     //   }
//     // });

//     console.log('Interceptor activado:', req);

//     return next.handle(req);
//   }
// }
