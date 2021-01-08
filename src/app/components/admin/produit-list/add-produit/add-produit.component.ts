import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/entity/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produit =new Produit();
  id:number;

  constructor(private produitservice: ProduitService,
    private router: Router,private aroute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.aroute.queryParams.subscribe(params => {
      this.id = params['id'];
    console.log(this.id);
  
  });

  } 
  OnSubmit() {
    this.save();
  }

  save() {
    this.produitservice.addProduit(this.produit).subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
  
  
  this.router.navigate(['/admin/G.Produits'], { queryParams: { id: this.id } });

}
}

