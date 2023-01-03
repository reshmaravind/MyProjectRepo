import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from './model';
import { UserManagementService } from './service/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent {
  users: userModel[] = [];
  deleteMessage: string = '';
  updateMessage: string = '';

  constructor(
    private userManagementService: UserManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userManagementService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  deleteUser(obj: any): void {
    this.userManagementService.deleteUser(obj.id).subscribe((res) => {
      this.deleteMessage = `User ${obj.employeeName} deleted Succesfully`;
      this.getUsers();
    });
  }

  updateUser(obj: any): void {
    this.router.navigate(['user', obj.id]);
    // this.userManagementService.updateUser(obj.id).subscribe((res) => {
    //   this.updateMessage = `User ${obj.employeeName} updated Succesfully`;
    //   this.getUsers();
    // });
  }
}
