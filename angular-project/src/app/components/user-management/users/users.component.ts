import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagementService } from '../service/user-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  employeeId: number = 0;
  userData: any;
  employeeName: string = '';
  location: string = '';
  designation: string = '';
  contactNumber: string = '';

  constructor(
    private userManagementService: UserManagementService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      this.employeeId = parameter['id'];
      console.log(parameter);
    });
    this.userManagementService
      .getUsersById(this.employeeId)
      .subscribe((res) => {
        this.userData = res;
        this.employeeName = this.userData.employeeName;
        this.location = this.userData.location;
        this.designation = this.userData.designation;
        this.contactNumber = this.userData.contactNumber;
      });
  }
  saveUser(): void {}
}
