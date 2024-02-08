import { Component } from '@angular/core';
import { Users } from 'src/model/Users';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
    users : Users;
    result : string=" ";
    myForm: FormGroup;
  
  
    constructor(private service : UserService,private router : Router){
      this.users = new Users;
      this.myForm = new FormGroup(
        {
          userName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
          password:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
        }
      )
    }
  
  
   
  
  
    loginUser(data:any){
      this.users.userName=data.userName;
      this.users.password=data.password;
   
     this.service.loginUser(this.users).subscribe(
       (resultdata:any)=> {
         console.log(resultdata)
         if(resultdata.message=="Admin Login Successfully"){
          this.router.navigate(['/AdminDashboard']);
       } else if(resultdata.message=="User Login Successfully"){
         this.router.navigate(['/UserDashboard']);
       }
       else{
         alert("Invalid User");
       }
     }
    );
  
  
   
    }
   
  
  
  }
  