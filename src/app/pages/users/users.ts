import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent {
  users = [
    { name: 'Admin', email: 'admin@example.com', role: 'Administrator', status: 'Active' },
    { name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Inactive' }
  ];
}

