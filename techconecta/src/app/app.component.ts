import { Component } from '@angular/core';
import { MenuItem } from './@thinkam/pilot/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  readonly logoSrc: string = 'assets/images/techconecta-logotipo.svg';
  readonly menus: Array<MenuItem> = [
    {
      path: '',
      label: 'Eventos',
      link: '#events',
      isCTA: false
    },
    {
      path: 'podcast',
      label: 'Podcast',
      link: '#podcast',
      isCTA: false
    },
    {
      path: 'photos',
      label: 'Fotos',
      link: 'https://instagram.com/tech_conectaa',
      isCTA: false
    },
    {
      path: 'partnerships',
      label: 'Parcerias',
      link: '#partners',
      isCTA: false
    },
    {
      path: 'register',
      label: 'FAÇA PARTE',
      link: '#be-part',
      isCTA: true
    }
  ];
}
