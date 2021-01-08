import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../services/registration.service';
import { User } from '../entity/user';
import {Router} from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user=new User();
 role=0;
 id:number;

 submitted=false;
erreur:string;
  cookieService: any;

  constructor(private _service :RegistrationService,private router:Router) {}

  ngOnInit(): void {

  }

  loginUser(){

this._service.loginRemoteUser(this.user).subscribe(
  
  data => {
    console.log("data "+data);
    if(data) this.role=data.role;
  // if(data=== null) this.role=data.role;
    console.log("data2");
    this.user=data;
  console.log("data3");
    // Data which is returned by call
   // console.log(this.role);
    this.goToAdminPage();
  },
 error => {
     
 }
 
  
  
);

  }
  goToAdminPage(){
            if(this.role==2){
            
            //  this.router.navigateByUrl('/admin');
            this.router.navigate(['/admin'],{queryParams : { id:this.user.id}})
              console.log("success");
            }
            else if(this.role==1){
         
              this.router.navigate(['/chef'],{queryParams : { id:this.user.id}})
            }
            else{ 
        
              this.submitted=true;
            this.erreur="email ou mot de passe incorrecte !";
            setTimeout(
              function(){ 
              location.reload(); 
              }, 10000);
           
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            };
              console.log("failed");
         /*     setTimeout(
                function(){ 
                location.reload(); 
                }, 1000);
             
              this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
              };*/
              console.log("erreuur");}
  }

 

}
