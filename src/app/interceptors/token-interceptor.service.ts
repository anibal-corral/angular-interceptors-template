import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor() { }
  
  
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Interceptor applied');
    const headers = new HttpHeaders({
      'user-token' :'123qwertyui'
    })

    const reqClone = req.clone({
      headers
    })

    return next.handle(reqClone).pipe(
     catchError(this.handleError)
    );

  }
 handleError(error:HttpErrorResponse){
  console.log('error ')
  console.warn(error);
  return throwError('Custom Error');
 }
}
