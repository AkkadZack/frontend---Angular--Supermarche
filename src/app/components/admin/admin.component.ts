import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id:number;
  constructor(private _service :UserService,private router:Router,private arouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  Onlick(){
  this.arouter.queryParams.subscribe(params => {
    this.id = params['id'];
  console.log(this.id);
  this.router.navigate(['/admin/user'], { queryParams: { id: this.id } });
});
  }
  toGUsers(){
    this.arouter.queryParams.subscribe(params => {
      this.id = params['id'];
    console.log(this.id);
    this.router.navigate(['admin/G.Users'], { queryParams: { id: this.id } });
  });
    }
    toGProduits(){
      this.arouter.queryParams.subscribe(params => {
        this.id = params['id'];
      console.log(this.id);
      this.router.navigate(['admin/G.Produits'], { queryParams: { id: this.id } });
    });
      }
      toCmds(){
        this.arouter.queryParams.subscribe(params => {
          this.id = params['id'];
        console.log(this.id);
        this.router.navigate(['admin/cmds'], { queryParams: { id: this.id } });
      });
      }
      toHome(){
        this.arouter.queryParams.subscribe(params => {
          this.id = params['id'];
        console.log(this.id);
        this.router.navigate(['admin'], { queryParams: { id: this.id } });
      });
      }
      logout(){
        this.router.navigate(['login']);
          this.id=null;
      }
}


