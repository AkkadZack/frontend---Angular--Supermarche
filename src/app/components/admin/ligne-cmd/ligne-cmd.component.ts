import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Lcmd } from 'src/app/entity/lcmd';
import { Produit } from 'src/app/entity/produit';
import { LcmdService } from 'src/app/services/lcmd.service';
import { CmdService } from 'src/app/services/cmd.service';

@Component({
  selector: 'app-ligne-cmd',
  templateUrl: './ligne-cmd.component.html',
  styleUrls: ['./ligne-cmd.component.css']
})
export class LigneCmdComponent implements OnInit {
  id:number;
  lcmds:Observable<Lcmd>;
  produits:Observable<Produit>;


  constructor(private route:ActivatedRoute,private router:Router,private lcmdService:LcmdService,private cmdService:CmdService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.lcmds=this.lcmdService.countLcmdByCmd(this.id);
    this.lcmdService.countLcmdByCmd(this.id).subscribe(
      data=> {
        console.log(data)
       }
        ,error => console.log(error));
  }

}
