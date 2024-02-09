import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GenderPipe } from '../../../core/pipes/gender.pipe';

type Mates = {
  id: number,
  name: string,
  budget: number,
  age: number,
  gender: number,
  description: string 
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    GenderPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() mates!: Mates[];
}
