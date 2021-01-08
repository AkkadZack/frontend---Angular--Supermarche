import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../entity/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = '/Produit';

  constructor(private http: HttpClient) { }


  getProduit(id:number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addProduit(Produit: Object): Observable<Object> {
    return this.http.post('http://localhost:9191/addProduit', Produit);
  }

  updateProduit(id:number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduit(id:number): Observable<any> {
    return this.http.delete(`http://localhost:9191/deleteProduit/${id}`, { responseType: 'text' });
  }

  getProduitList(): Observable<any> {
    return this.http.get('http://localhost:9191/Produits');
  }
}
