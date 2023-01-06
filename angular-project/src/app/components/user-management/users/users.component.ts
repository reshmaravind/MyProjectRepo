import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userModel } from '../model';
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
    });
    if (this.employeeId !== -1) {
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
  }
  saveUser(): void {
    if (this.employeeId !== 1) {
      let urlbody: userModel = new userModel();
      urlbody.id = this.employeeId;
      urlbody.employeeName = this.employeeName;
      urlbody.designation = this.designation;
      urlbody.contactNumber = this.contactNumber;
      urlbody.location = this.location;
      this.userManagementService
        .updateUser(this.employeeId, urlbody)
        .subscribe((res) => {
          this.router.navigate(['userManagement']);
        });
    } else {
      let urlbody: userModel = new userModel();
      urlbody.employeeName = this.employeeName;
      urlbody.designation = this.designation;
      urlbody.contactNumber = this.contactNumber;
      urlbody.location = this.location;
      this.userManagementService.createUser(urlbody).subscribe((res) => {
        this.router.navigate(['userManagement']);
      });
    }
  }
}
