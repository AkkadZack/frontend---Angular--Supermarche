import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/entity/produit';
import { Fournisseur } from 'src/app/entity/fournisseur';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { FounisseurService } from 'src/app/services/founisseur.service';
import { CmdService } from 'src/app/services/cmd.service';
import { Cmd } from 'src/app/entity/cmd';
import { LcmdService } from 'src/app/services/lcmd.service';
import { async } from 'rxjs/internal/scheduler/async';
import { timer } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
 isButtonVisible:boolean;
 count:number;
 produits:Observable<Produit>;
 idProduits: number[]=[];
 idFournisseurs: number[]=[];
 test: number[]=[];
 idProduit:number;
 idFournisseur:number;
 fournisseurs:Observable<Fournisseur>;
 cmd=new Cmd();
 fournisseur:Fournisseur;
 produit:Produit;
 qts:number[]=[];
 idCmd:number;
id:number;
 ms:number;

 isClicked=false;
 submitted=false;
  constructor(private route:ActivatedRoute, private produitService:ProduitService,private lcmdService:LcmdService,private cmdService:CmdService,private fournisseurSertvice:FounisseurService,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id=params['id'];
      }
    )
    if(!this.id) this.submitted=true;
    this.isButtonVisible=false;
    this.count=0;
    this.cmdService.getIdCmd().subscribe(
      data=>{
   console.log("id commande :"+data);
   this.idCmd=data;
       },
       
       error=>console.log(error)
   
    );
    

    /*
  this.idPs.push(1);

  for (let id of this.idPs) {
    console.log(id); // 1, "string", false
  }*/

  this.produits= this.produitService.getProduitList();
  this.fournisseurs=this.fournisseurSertvice.getProduitList();
    this.produitService.getProduitList().subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
  }
  onChange(newValue) {
    this.createCmd(this.id);
    // ... do other stuff here ...
}
  /*
  save(){
    this._service.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }*/
  createCmd(idChef:number){
       this.cmdService.createCmd(idChef).subscribe(
           data=>{
            console.log(data);
            console.log(this.idProduit);
            console.log("creation du cmd");
           },
           
           error=>console.log(error)
       )
  }
  createLigne1(idProduit1:number,idFournissuer1:number){  
   
      console.log('after delay')
      console.log(this.count);
      console.log("id cmd :"+this.idCmd);
      console.log("id produit :"+idProduit1);
      console.log("id fournisseur :"+idFournissuer1);
      console.log(this.qts[0]);
      
    this.lcmdService.createLcmd(idFournissuer1,idProduit1,this.qts[0],this.idCmd).subscribe(
      data=>{
       console.log(data);
       console.log("creation du ligne de commmande");
       this.count++;
      },
      error=>console.log(error)
  );

     
  }
  createLigne2(idProduit2:number,idFournissuer2:number){  
    console.log(this.count);
    console.log(this.idCmd);
    console.log("id produit :"+idProduit2);
    console.log("id fournisseur :"+idFournissuer2);
    console.log(this.qts[1]);
  this.lcmdService.createLcmd(idFournissuer2,idProduit2,this.qts[1],this.idCmd).subscribe(
    data=>{
     console.log(data);
     this.count++;
    },
    error=>console.log(error)
);
}
createLigne3(idProduit3:number,idFournissuer3:number){  
  console.log(this.count);
  console.log(this.idCmd);
  console.log("id produit :"+idProduit3);
  console.log("id fournisseur :"+idFournissuer3);
  console.log(this.qts[2]);
this.lcmdService.createLcmd(idFournissuer3,idProduit3,this.qts[2],this.idCmd).subscribe(
  data=>{
   console.log(data);
   this.count++;
  },
  error=>console.log(error)
);
}

createLigne4(idProduit4:number,idFournissuer4:number){  
  console.log(this.count);
  console.log(this.idCmd);
  console.log("id produit :"+idProduit4);
  console.log("id fournisseur :"+idFournissuer4);
  console.log(this.qts[3]);
this.lcmdService.createLcmd(idFournissuer4,idProduit4,this.qts[3],this.idCmd).subscribe(
  data=>{
   console.log(data);
   this.count++;
  },
  error=>console.log(error)
);
}
createLigne5(idProduit5:number,idFournissuer5:number){  
  console.log(this.count);
  console.log(this.idCmd);
  console.log("id produit :"+idProduit5);
  console.log("id fournisseur :"+idFournissuer5);
  console.log(this.qts[4]);
this.lcmdService.createLcmd(idFournissuer5,idProduit5,this.qts[4],this.idCmd).subscribe(
  data=>{
   console.log(data);
   this.count++;
  },
  error=>console.log(error)
);
}

}
