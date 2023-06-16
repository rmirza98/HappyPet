import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../login/login';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiURL = "http://localhost:8080/api/usuario";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Usuario[]> {
   return this.httpClient.get<Usuario[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(usuario:Usuario): Observable<Usuario> {
   return this.httpClient.post<Usuario>(this.apiURL, JSON.stringify(usuario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 createLogin(login:Login): Observable<Login> {
  return this.httpClient.post<Login>(this.apiURL+"/login", JSON.stringify(login), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}


 find(id:number): Observable<Usuario> {
   return this.httpClient.get<Usuario>(this.apiURL +"/"+ id)
   .pipe(
     catchError(this.errorHandler)
   )
 }


 findLogin(): Observable<Usuario> {
  return this.httpClient.get<Usuario>(this.apiURL +"/login")
  .pipe(
    catchError(this.errorHandler)
  )
}

 findUsername(nombre:string): Observable<Usuario> {
  return this.httpClient.get<Usuario>(this.apiURL +"/"+ nombre)
  .pipe(
    catchError(this.errorHandler)
  )
}

 update(id:number, usuario:Usuario): Observable<Usuario> {
   return this.httpClient.put<Usuario>(this.apiURL+"/" + id, JSON.stringify(usuario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Usuario>(this.apiURL +"/"+ id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }
 
 deleteLogin(): void {
  // Realiza una solicitud al servidor cuando se hace clic en el botón
  this.httpClient.get<any>('http://localhost:8080/api/usuario/sesion').subscribe(
    response => {
      console.log('La acción del servidor se ha ejecutado correctamente:', response);
    },
    error => {
      console.error('Ocurrió un error al ejecutar la acción del servidor:', error);
    }
  )};

 errorHandler(error:any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
