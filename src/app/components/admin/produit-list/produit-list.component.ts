import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/entity/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  Produits:Observable<Produit>;
  id:number;
  submitted=false;
  constructor(private _service:ProduitService,private aroute: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params => {
      this.id = params['id'];
    console.log(this.id);
   
  });
  if(!this.id) this.submitted=true;
    this.reloadData();
  }
  reloadData() {
    this.Produits = this._service.getProduitList();
  }
  deleteProduit(id:number){
    this._service.deleteProduit(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
    addProduit(){
  
    this.router.navigate(['admin/G.Produits/addProduit'], { queryParams: { id: this.id } });
  
  }
}
