import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mates = [
    {
      id: 1,
      name: 'Leonardo ALencar',
      budget: 300,
      age: 21,
      gender: 1,
      description: "I am a 19 year old student at UQ, currently teaching swim lessons part time. I am looking for a place to get a little closer to uni (I am currently in the Gold Coast) and also be able to make friends in a share house!",
    },
    {
      id: 2,
      name: 'Isabelle Rosalez',
      budget: 320,
      age: 20,
      gender: 2,
      description: "Hi hi! My name is Claire, I am 24 & just moved to Aus from Vancouver, Canada to escape the winter. I’m looking for a short term rental for March/April in Bondi, Bronte or Coogee (preferably furnished), for 1-2 months. I recently graduated with my masters & am now working remotely so my work schedule is pretty flexible.",
    },
    {
      id: 3,
      name: 'Gabriela Silva',
      budget: 340,
      age: 19,
      gender: 2,
      description: "During the week I love to get up early and stay active going on walks, working out, etc. but I also don’t mind going for a couple drinks on the weekends. I like to keep my space pretty clean & am on the quieter side but I’m always down to chat since I love getting to know new people!",
    },
  ];
}
