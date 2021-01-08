import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acompte',
  templateUrl: './acompte.component.html',
  styleUrls: ['./acompte.component.css']
})
export class AcompteComponent implements OnInit {
  id : number;
  item : string;
  user : User;
  submitted = false;
  constructor(private aroute: ActivatedRoute,private router: Router,
    private Service: UserService) { }

  ngOnInit(): void {

    this.user = new User();
    this.aroute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
});
if(!this.id) this.submitted=true;
console.log("id:"+this.id);
    this.Service.getUser(this.id).subscribe(
      data =>
      {
        this.user=<User>data;
        error => console.log(error);
      });
  }
 /* UserByname(){
    this.Service.getUserbyName(this.item).subscribe(
      data =>
      {
        this.user=<User>data;
        error => console.log(error);
      });
      
  }*/
   

  onSubmit() {
    this.updateUser();    
  }


updateUser() {
    this.Service.updateUser(this.user.id,this.user).subscribe(
      data =>
      {
        console.log(data);
        this.user=<User>data;
      });
    this.gotoUser();
  }
  gotoUser() {
    if(this.user.role==2)
    this.router.navigate(['/admin'], { queryParams: { id: this.user.id } });
    else if(this.user.role==1)
    this.router.navigate(['/chef'], { queryParams: { id: this.user.id } });

  }
}

