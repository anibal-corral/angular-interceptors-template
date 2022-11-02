import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) 
  {



  }

getUsers(){
  // const params = new HttpParams().append('page','2');
  let params = new HttpParams().append('page','2');
  params = params.append('name', 'Anastasia');
  // const headers = new HttpHeaders({
  //   'user-token' :'123qwertyui'
  // })
  return this.http.get('https://reqres1.in/api/user',
    {
      params, 
      
  }
  ).pipe(
    map((resp:any) =>{
      return resp['data'];
    })
    // ,
    // catchError( (err) => {
    //   // console.log(err);
    //   console.warn(err);
    //   return throwError('Error ');
    // })
  )
  ;
}

}
