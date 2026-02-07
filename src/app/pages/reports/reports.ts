import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class ReportsComponent {
  reports = [
    { name: 'User Activity Report', date: '2024-03-01', status: 'Ready' },
    { name: 'Monthly Analytics', date: '2024-02-28', status: 'Processing' },
    { name: 'Security Audit', date: '2024-02-25', status: 'Failed' }
  ];
}

