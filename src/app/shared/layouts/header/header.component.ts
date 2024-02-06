import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  needs = [
    // {
    //   id: 1,
    //   title: 'Acomodações',
    //   path: ''
    // },
    // {
    //   id: 2,
    //   title: 'Companheiros',
    //   path: ''
    // },
    // {
    //   id: 3,
    //   title: 'Sobre',
    //   path: '/sobre'
    // }
  ]
}
