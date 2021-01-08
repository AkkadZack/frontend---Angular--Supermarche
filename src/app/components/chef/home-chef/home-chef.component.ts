import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.css']
})
export class HomeChefComponent implements OnInit {
id:number;
user : User;
submitted=false;
  constructor(private route:ActivatedRoute,private Service: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.id=params['id'];
      });
      if(!this.id) this.submitted=true;
      this.Service.getUser(this.id).subscribe(
        data =>
        {
          this.user=<User>data;
          error => console.log(error);
        });
  }

}
