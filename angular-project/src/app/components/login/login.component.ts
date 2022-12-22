import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Constants from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username='Reshma';
  password='';
  loginStatus:any;
  clicked:boolean=false;
  errorMessage=Constants.LOGIN_ERROR_MSG;

 constructor(private router:Router){}

 ngOnInit():void{}

 onLogging():void{
  this.clicked =true;
  if(!this.username || !this.password){
    this.loginStatus=false;
  }else{
    this.router.navigate(['landingPage', this.username])
  }

 }

}
