import { Component, input } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  title = input<string>('');
  subTitle = input<string>('');
  constructor(){

  }
}
