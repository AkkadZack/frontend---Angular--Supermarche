import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CmdService } from 'src/app/services/cmd.service';
import { LcmdService } from 'src/app/services/lcmd.service';
import { Observable } from 'rxjs';
import { Lcmd } from 'src/app/entity/lcmd';
import { Produit } from 'src/app/entity/produit';

@Component({
  selector: 'app-detail-cmd',
  templateUrl: './detail-cmd.component.html',
  styleUrls: ['./detail-cmd.component.css']
})
export class DetailCmdComponent implements OnInit {
 idcmd : number;
 lcmds:Observable<Lcmd>;
 produits:Observable<Produit>;
 id:number;
 submitted=false;
  constructor(private route:Router,private cmdService:CmdService,private lcmdService: LcmdService
              ,private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
});
if(!this.id) this.submitted=true;
    this.idcmd=this.router.snapshot.params['id'];
    console.log(this.idcmd);
    this.lcmds=this.lcmdService.countLcmdByCmd(this.idcmd);
    this.lcmdService.countLcmdByCmd(this.idcmd).subscribe(
      data=> {
        console.log(data)
       }
        ,error => console.log(error));
  }
  }

