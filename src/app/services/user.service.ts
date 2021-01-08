import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = '/User';

  constructor(private http: HttpClient) { }

  getUser(id:number): Observable<any> {
    return this.http.get(`http://localhost:9191/UserById/${id}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post('http://localhost:9191/addChef',user);
  }

  updateUser(id:number, value: any): Observable<User> {
    return this.http.put<User>('http://localhost:9191/updateUser', value);
  }

  deleteUser(id:number): Observable<any> {
    return this.http.delete(`http://localhost:9191/deleteUser/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get('http://localhost:9191/Users');
  }
}
