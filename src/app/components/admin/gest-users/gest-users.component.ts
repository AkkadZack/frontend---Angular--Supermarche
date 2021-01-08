import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user';
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-gest-users',
  templateUrl: './gest-users.component.html',
  styleUrls: ['./gest-users.component.css']
})
export class GestUsersComponent implements OnInit {
  users:Observable<User>;
  userid:number;
  submitted=false;
  constructor(private _service:UserService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userid = params['id'];
    console.log(this.userid);
  });
  if(!this.userid) this.submitted=true;
    this.reloadData();
  }
  reloadData() {
    this.users = this._service.getUserList();
  }
  deleteUser(id:number){
    this._service.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }
    updateUser(id:number){
      this.router.navigate(['admin/updateUser',id], { queryParams: { id: this.userid } });

    }
    toaddUser(){
      this.router.navigate(['admin/addUser'], { queryParams: { id: this.userid } });
    }
}
