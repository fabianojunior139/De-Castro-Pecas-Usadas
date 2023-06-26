import { Component } from '@angular/core';
import { SideNavToggle } from 'src/app/models/sidenav';

@Component({
  selector: 'app-adm-dashboard',
  templateUrl: './adm-dashboard.component.html',
  styleUrls: ['./adm-dashboard.component.css']
})
export class AdmDashboardComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
