import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class NotificationsComponent {

  notifications = [
    {
      title: 'New user registered',
      message: 'John Doe has successfully registered.',
      time: '2 minutes ago',
      type: 'info',
      unread: true
    },
    {
      title: 'System update completed',
      message: 'The system update was completed successfully.',
      time: '1 hour ago',
      type: 'success',
      unread: false
    },
    {
      title: 'Password changed',
      message: 'Admin password was changed.',
      time: 'Yesterday',
      type: 'warning',
      unread: false
    },
    {
      title: 'Multiple failed login attempts',
      message: 'Suspicious login activity detected.',
      time: '2 days ago',
      type: 'error',
      unread: true
    }
  ];

}
