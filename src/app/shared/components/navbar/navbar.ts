import { MenuItem } from 'primeng/api';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  title = input<string | undefined>('');
  subTitle = input<string | undefined>('');
  menuItems: MenuItem[] = [
    {
      label:'Singleton',
      routerLink: '/post'
    },
    {
      label: 'Adaptor',
      routerLink: '/adaptor'
    },
    {
      label: "Factory",
      routerLink: '/text-format'
    }
  ]
  constructor(){
  }
}
