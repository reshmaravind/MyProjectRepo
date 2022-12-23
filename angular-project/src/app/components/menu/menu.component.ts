import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isUserLoggedIn: boolean = false;
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    //this.isUserLoggedIn = this.authenticationService.isUserLoggedIn();
  }
}
