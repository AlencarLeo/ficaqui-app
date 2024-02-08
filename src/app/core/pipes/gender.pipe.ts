import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: number): string {
    const gender = [
      "Masculino",
      "Feminino"
    ]

    return gender[value - 1];
  }

}
