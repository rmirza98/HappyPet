import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private apiURL = "http://localhost:8080/api/venta";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Venta[]> {
   return this.httpClient.get<Venta[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(id:number,venta:Venta): Observable<Venta> {
   return this.httpClient.post<Venta>(this.apiURL+"/"+id, JSON.stringify(venta), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:number): Observable<Venta> {
   return this.httpClient.get<Venta>(this.apiURL + "/"+id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, venta:Venta): Observable<Venta> {
   return this.httpClient.put<Venta>(this.apiURL +"/" +id, JSON.stringify(venta), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Venta>(this.apiURL+"/" + id, this.httpOptions)
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
