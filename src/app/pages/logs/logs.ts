import { Component } from '@angular/core';

@Component({
  selector: 'app-logs',
  standalone: true,
  templateUrl: './logs.html',
  styleUrls: ['./logs.css']
})
export class LogsComponent {
  logs = [
    { action: 'User login', user: 'Admin', time: '2 mins ago' },
    { action: 'Settings updated', user: 'Admin', time: '1 hour ago' },
    { action: 'Report generated', user: 'John', time: 'Yesterday' }
  ];
}
