// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SystemMetric {
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface ServerStatus {
  name: string;
  status: 'online' | 'offline' | 'maintenance';
  uptime: string;
  lastRestart: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  systemMetrics: SystemMetric[] = [];
  serverStatuses: ServerStatus[] = [];
  showDetailsDialog: boolean = false;
  selectedMetric: SystemMetric | null = null;
  
  ngOnInit(): void {
    this.loadSystemMetrics();
    this.loadServerStatuses();
  }
  
  loadSystemMetrics(): void {
    // This would typically come from an API
    this.systemMetrics = [
      { name: 'CPU Usage', value: 42, unit: '%', status: 'good', trend: 'up' },
      { name: 'Memory Usage', value: 68, unit: '%', status: 'warning', trend: 'up' },
      { name: 'Disk Space', value: 78, unit: '%', status: 'warning', trend: 'stable' },
      { name: 'Network Load', value: 38, unit: 'Mbps', status: 'good', trend: 'down' },
      { name: 'Active Users', value: 1287, unit: 'users', status: 'good', trend: 'up' },
      { name: 'Response Time', value: 245, unit: 'ms', status: 'good', trend: 'stable' }
    ];
  }
  
  loadServerStatuses(): void {
    // This would typically come from an API
    this.serverStatuses = [
      { name: 'Main Application Server', status: 'online', uptime: '45 days', lastRestart: '2025-03-01' },
      { name: 'Database Server', status: 'online', uptime: '12 days', lastRestart: '2025-04-02' },
      { name: 'AI Processing Cluster', status: 'online', uptime: '30 days', lastRestart: '2025-03-15' },
      { name: 'Backup Server', status: 'maintenance', uptime: '0 days', lastRestart: '2025-04-14' }
    ];
  }
  
  showDetails(metric: SystemMetric): void {
    this.selectedMetric = metric;
    this.showDetailsDialog = true;
  }
  
  closeDialog(): void {
    this.showDetailsDialog = false;
    this.selectedMetric = null;
  }
  
  getTrendIcon(trend: string): string {
    if (trend === 'up') return 'fa-arrow-up';
    if (trend === 'down') return 'fa-arrow-down';
    return 'fa-arrows-alt-h';
  }
  
  getStatusClass(status: string): string {
    if (status === 'good' || status === 'online') return 'status-good';
    if (status === 'warning' || status === 'maintenance') return 'status-warning';
    return 'status-critical';
  }
}