import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import * as Constants from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = 'Reshma';
  password = '';
  loginStatus: any;
  clicked: boolean = false;
  errorMessage = Constants.LOGIN_ERROR_MSG;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onLogging(): void {
    this.clicked = true;
    // if(!this.username || !this.password){
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['landingPage', this.username]);
    } else {
      this.loginStatus = false;
    }
  }
}
