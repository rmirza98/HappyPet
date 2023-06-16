import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private apiURL = "http://localhost:8080/api/comentario";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }



  getAll(): Observable<Comentario[]> {
   return this.httpClient.get<Comentario[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(id:number,usuario:number,comentario:Comentario): Observable<Comentario> {
   return this.httpClient.post<Comentario>(this.apiURL+"/"+id+"/"+usuario, JSON.stringify(comentario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:any): Observable<Comentario> {
   return this.httpClient.get<Comentario>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }
 
 getComentarioByProducto(id:number): Observable<Comentario[]> {
  return this.httpClient.get<Comentario[]>(this.apiURL + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

 update(id:number, comentario:Comentario): Observable<Comentario> {
   return this.httpClient.put<Comentario>(this.apiURL + id, JSON.stringify(comentario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Comentario>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

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
