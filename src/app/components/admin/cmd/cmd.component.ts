import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user';
import { Cmd } from 'src/app/entity/cmd';
import { CmdService } from 'src/app/services/cmd.service';
import { LcmdService } from 'src/app/services/lcmd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lcmd } from 'src/app/entity/lcmd';
@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.css']
})
export class CmdComponent implements OnInit {

  cmds:Observable<Cmd>;
  users:Observable<User>;
  lcmds:Observable<Lcmd>;
  userid:number;
  submitted=false;

  constructor(private route:ActivatedRoute,private _service:CmdService,private lcmdService:LcmdService,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.userid= params['id'];
      }
    );
    if(!this.userid) this.submitted=true;
    this.cmds = this._service.getCmdList();
    this._service.getCmdList().subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
    this.reloadData();
  }
  reloadData() {
    this.cmds = this._service.getCmdList();

  }
  detailCmd(id:number){
    this.router.navigate(['admin/ligneCmd',id],{queryParams : { id:this.userid}} );

  }
 

  deleteCmd(id:number){    
 
    this._service.deleteCmd(id).subscribe(
      data => {
        console.log("commande deleted !!");
        console.log(data);
        this.reloadData();
 
      },    
      error => this.reloadData());

  }
  refresh(): void {
    window.location.reload();
}
  activer(id:number){
    this._service.activerCmd(id).subscribe(
      data => {
        console.log("commande activé !!");
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));

  }
  rejeter(id:number){
    this._service.rejeterCmd(id).subscribe(
      data => {
        console.log("commande rejeté !!");
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));

  }

  /*
  countLcmd(id:number){
    this.lcmd=this.lcmdService.countLcmdByCmd(id);
  }
  */
}
