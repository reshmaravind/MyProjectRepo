import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MainScreenServiceService } from './service/main-screen-service.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent {
  userName: string = '';
  welcomeMsg: string = '';
  welcomeErrorMsg: string = '';
  constructor(
    private route: ActivatedRoute,
    private mainScreenServiceService: MainScreenServiceService
  ) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['username'];
  }

  getMessage(): void {
    this.mainScreenServiceService
      .getLoggedInUser(this.userName)
      .subscribe((res) => {
        console.log(res);
        //this.welcomeMsg = res;
      });
  }
  handleErrorResponse(error: any): void {
    this.welcomeErrorMsg = error.error.message;
  }
}
