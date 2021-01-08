import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  id : number;
  
  constructor(private route:ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id=params['id'];
      });
  }
  toCommander(){
  this.router.navigate(['/chef/commander'],{queryParams : { id:this.id}})
  }
  toCmds(){
    this.router.navigate(['/chef/mesCmds'],{queryParams : { id:this.id}})

  }
  toCompte(){
    this.router.navigate(['/chef/user'],{queryParams : { id:this.id}})

  }
  logout(){
    this.router.navigate(['login']);
      this.id=null;
  }
}
