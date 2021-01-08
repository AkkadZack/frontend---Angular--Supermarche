import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FounisseurService {
  constructor(private http: HttpClient) { }

  getProduit(id: number): Observable<Object> {
    return this.http.get('http://localhost:9191/Cmd');
  }

  getProduitList(): Observable<any> {
    return this.http.get('http://localhost:9191/Fournisseurs');
  }
}
