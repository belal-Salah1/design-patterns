import { MenuItem } from 'primeng/api';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  title = input<string | undefined>('');
  subTitle = input<string | undefined>('');
  menuItems: MenuItem[] = [
    {
      label:'Post',
      routerLink: '/Singleton'
    },
    {
      label: 'Adaptor',
      routerLink: '/adaptor'
    }
  ]
  constructor(){
  }
}
