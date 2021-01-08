import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:User;
id:number;
submitted=false;
  constructor(private route:ActivatedRoute,private router:Router,private _service:UserService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    if(!this.id) this.submitted=true;
    this._service.getUser(this.id).subscribe(
      data=> {
        console.log(data)
        
        console.log('email:'+this.user);
        this.user=data;}
        ,error => console.log(error));   
  }
  updateUser(){
    this._service.updateUser(this.id,this.user).subscribe(
       data=>console.log(data),
       error=>console.log(error)
    );
    this.user=new User();
    this.goToList();
  }
  onSubmit(){
    this.updateUser();
  }
goToList(){
  this.router.navigate(['admin/G.Users']);
}
}
