import { Component } from '@angular/core';
import { userModel } from './model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent {
  users: userModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        name: 'Reshma',
        id: 1,
        location: 'Kochi',
        designation: 'Software Developer',
        contactNumber: '8848685878',
      },
      {
        name: 'Ajay',
        id: 2,
        location: 'Pune',
        designation: 'Senior Software Developer',
        contactNumber: '9566809489',
      },
      {
        name: 'Remya',
        id: 3,
        location: 'Bangalore',
        designation: 'SAP Consultant',
        contactNumber: '8301820264',
      },
    ];
  }
}
