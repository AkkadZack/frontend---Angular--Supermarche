import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http:HttpClient) { }

  public loginRemoteUser(user:User):Observable<User>{
    return this._http.post<User>("http://localhost:9191/login",user,this.httpOptions);
  }



}
