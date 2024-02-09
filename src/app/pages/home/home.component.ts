import { Component } from '@angular/core';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cities = [
    {
      id: 1,
      name: "Sydney"
    },
    {
      id: 2,
      name: "Melbourne"
    },
    {
      id: 3,
      name: "Adelaide"
    },
    {
      id: 4,
      name: "Perth"
    },
    {
      id: 5,
      name: "Brisbane"
    },
    {
      id: 6,
      name: "Gold Coast"
    }
  ]

  mates = [
    {
      id: 1,
      name: 'Leonardo ALencar',
      budget: 300,
      age: 21,
      gender: 1,
    },
    {
      id: 2,
      name: 'Isabelle Rosalez',
      budget: 320,
      age: 20,
      gender: 2,
    },
    {
      id: 3,
      name: 'Gabriela Silva',
      budget: 340,
      age: 19,
      gender: 2,
    },
    {
      id: 4,
      name: 'Gabriela Silva',
      budget: 340,
      age: 19,
      gender: 2,
    },
    {
      id: 5,
      name: 'Gabriela Silva',
      budget: 340,
      age: 19,
      gender: 2,
    },
    {
      id: 6,
      name: 'Gabriela Silva',
      budget: 340,
      age: 19,
      gender: 2,
    },
    {
      id: 7,
      name: 'Gabriela Silva',
      budget: 340,
      age: 19,
      gender: 2,
    },
  ];
}
