import { HttpEvent, HttpHandlerFn, HttpRequest,HttpInterceptor,  HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";


export function JWTauthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // var userLocal=localStorage.getItem("usuario");

  // var userP=null;
  // userLocal!=null?userP= JSON.parse(userLocal):null;

  // console.log(userP);
  // console.log(req.url);
  return next(req);
}
