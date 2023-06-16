import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiURL = "http://localhost:8080/api/producto";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Producto[]> {
    console.log("funciona");
   return this.httpClient.get<Producto[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)

   )
 }

 create(producto:Producto): Observable<Producto> {
   return this.httpClient.post<Producto>(this.apiURL, JSON.stringify(producto), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:number): Observable<Producto> {
   return this.httpClient.get<Producto>(this.apiURL +"/"+ id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, producto:Producto): Observable<Producto> {
   return this.httpClient.put<Producto>(this.apiURL +"/"+ id, JSON.stringify(producto), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Producto>(this.apiURL + "/"+id, this.httpOptions)
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


 getProductosPorCategoria(categoriaId: number): Observable<Producto[]> {
  return this.httpClient.get<Producto[]>(this.apiURL+"/por-categoria/"+categoriaId)
  .pipe(
    catchError(this.errorHandler)

  )
}

}
