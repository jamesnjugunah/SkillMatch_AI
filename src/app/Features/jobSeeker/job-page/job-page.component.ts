import { Component } from '@angular/core';
import { HeaderComponent } from '../../Shared/Components/header/header.component';
import { SideBarComponent } from '../../Shared/Components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-job-page',
  imports: [ HeaderComponent, SideBarComponent, RouterOutlet],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css'
})
export class JobPageComponent {
  menuItems: MenuItem[] = [
   
  ];

  setActive(selectedItem: MenuItem): void {
    this.menuItems.forEach(item => item.active = false);
    selectedItem.active = true;
  }

}
