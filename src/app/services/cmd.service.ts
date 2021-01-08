import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cmd } from '../entity/cmd';

@Injectable({
  providedIn: 'root'
})
export class CmdService {


  constructor(private http: HttpClient) { }

  getCmd(id: number): Observable<Object> {
    return this.http.get('http://localhost:9191/Cmd');
  }

  createCmd(idChef:number): Observable<Object> {
    return this.http.post(`http://localhost:9191/addCmd/${idChef}`,null);
    
  }

  updateCmd(id: number, value: any): Observable<Object> {
    return this.http.put('http://localhost:9191/updatecmd', value);
  }
  activerCmd(id:number):Observable<Object> {
    return this.http.put(`http://localhost:9191/activerCmd/${id}`,null);
  
  }
  rejeterCmd(id:number):Observable<Object> {
    return this.http.put(`http://localhost:9191/rejeterCmd/${id}`,null);
  
  }

  deleteCmd(id: number): Observable<string> {
    return this.http.put<string>(`http://localhost:9191/supCmd/${id}`, { responseType: 'text' });
  }

  getCmdList(): Observable<Cmd> {
    return this.http.get<Cmd>('http://localhost:9191/TCmds');   
  }
  getCmdListByUser(id:number): Observable<Cmd> {
    return this.http.get<Cmd>(`http://localhost:9191/CmdsByUserId/${id}`);   
  }
     getIdCmd(): Observable<number> {
    return this.http.get<number>('http://localhost:9191/newIdCmd');
  }
         
}
