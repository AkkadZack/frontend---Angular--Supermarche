import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lcmd } from '../entity/lcmd';
import { CmdService } from './cmd.service';
import { CmdComponent } from '../components/admin/cmd/cmd.component';
import { CommanderComponent } from '../components/chef/commander/commander.component';

@Injectable({
  providedIn: 'root'
})
export class LcmdService {
id:number;
  constructor(private http: HttpClient,private cmdService:CmdService) { }

  getLcmd(id: number): Observable<Lcmd> {
    return this.http.get<Lcmd>('');
  }
  countLcmdByCmd(id: number):Observable<Lcmd>{
    return this.http.get<Lcmd>(`http://localhost:9191/LcmdsByCmd/${id}`);
    
    
  }
  remplir(id:number){
    this.id=id;
  }

  createLcmd(idF:number,idP:number,qt:number,idCmd:number): Observable<Object> {

    return this.http.post(`http://localhost:9191/addLcmd/${idCmd}/${idF}/${idP}/${qt}`, null);
  }


  updateLcmd(id: number, value: any): Observable<Object> {
    return this.http.put('http://localhost:9191/countLcmd', value);
  }

  deleteLcmd(id: number): Observable<any> {
    return this.http.delete('http://localhost:9191/countLcmd', { responseType: 'text' });
  }

  getLcmdList(): Observable<any> {
    return this.http.get('http://localhost:9191/countLcmd');
  }
}
