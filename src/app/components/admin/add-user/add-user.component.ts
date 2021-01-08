import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user=new User();
  submitted = false;
  submittedA = false;
  id:number;
  constructor(private _service:UserService,private aroute: ActivatedRoute,private router: Router) {  }

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
});
if(!this.id) this.submittedA=true;
  }

  save(){
    this._service.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
