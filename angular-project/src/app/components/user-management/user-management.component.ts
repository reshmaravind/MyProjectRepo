import { Component } from '@angular/core';
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

  constructor(private userManagementService: UserManagementService) {}

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
}
