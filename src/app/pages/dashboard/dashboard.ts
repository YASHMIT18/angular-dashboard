import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.salesPurchaseChart();
    this.revenueTrendChart();
    this.categoryPieChart();
  }

  salesPurchaseChart() {
    new Chart('salesPurchaseChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Sales',
            data: [120, 190, 300, 250, 220, 310],
            backgroundColor: '#4f46e5'
          },
          {
            label: 'Purchase',
            data: [100, 150, 280, 200, 210, 260],
            backgroundColor: '#38bdf8'
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  revenueTrendChart() {
    new Chart('revenueTrendChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [200, 420, 380, 500, 480, 620],
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34,197,94,0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      }
    });
  }

  categoryPieChart() {
    new Chart('categoryPieChart', {
      type: 'pie',
      data: {
        labels: ['Electronics', 'Clothing', 'Groceries', 'Others'],
        datasets: [
          {
            data: [45, 25, 20, 10],
            backgroundColor: [
              '#4f46e5',
              '#22c55e',
              '#facc15',
              '#ef4444'
            ]
          }
        ]
      }
    });
  }
}
