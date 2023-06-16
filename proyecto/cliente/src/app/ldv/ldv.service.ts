import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Ldv } from './ldv';

@Injectable({
  providedIn: 'root'
})
export class LdvService {

  private apiURL = "http://localhost:8080/api/ldv";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Ldv[]> {
   return this.httpClient.get<Ldv[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(id:number,ldv:Ldv): Observable<Ldv> {
   return this.httpClient.post<Ldv>(this.apiURL+"/"+id, JSON.stringify(ldv), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:number): Observable<Ldv> {
   return this.httpClient.get<Ldv>(this.apiURL +"/"+ id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, ldv:Ldv): Observable<Ldv> {
   return this.httpClient.put<Ldv>(this.apiURL + "/"+id, JSON.stringify(ldv), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<Ldv>(this.apiURL + "/"+id, this.httpOptions)
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
