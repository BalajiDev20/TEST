import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppSeriveService {

  constructor(private HttpClient:HttpClient) { }


  getEmp(): Observable <any>{
   return this.HttpClient.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
