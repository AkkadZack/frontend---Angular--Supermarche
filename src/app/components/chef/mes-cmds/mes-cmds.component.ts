import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cmd } from 'src/app/entity/cmd';
import { Observable } from 'rxjs';
import { Lcmd } from 'src/app/entity/lcmd';
import { User } from 'src/app/entity/user';
import { CmdService } from 'src/app/services/cmd.service';

@Component({
  selector: 'app-mes-cmds',
  templateUrl: './mes-cmds.component.html',
  styleUrls: ['./mes-cmds.component.css']
})
export class MesCmdsComponent implements OnInit {
id:number;
cmds:Observable<Cmd>;
users:Observable<User>;
lcmds:Observable<Lcmd>;
submitted=false;
  constructor(private route:ActivatedRoute,private router : Router,private cmdService:CmdService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id=params['id'];
      }
    );
    if(!this.id) this.submitted=true;
    console.log("id :"+this.id);
    this.cmds = this.cmdService.getCmdListByUser(this.id);
    this.cmdService.getCmdListByUser(this.id).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
   this.reloadData();
  }
  deleteCmd(id:number){    
 
    this.cmdService.deleteCmd(id).subscribe(
      data => {
        console.log("commande deleted !!");
        console.log(data);
        this.reloadData();
 
      },    
      error => this.reloadData());

  }
  reloadData() {
    this.cmds = this.cmdService.getCmdList();

  }
  detailCmd(cmdid:number){
    this.router.navigate(['chef/ligneCmd',cmdid],{queryParams : { id:this.id}} );
  }

}
