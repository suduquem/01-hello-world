import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  showSentence = true;

  sentence: any = {
    message: 'Great power requires great responsibility',
    author: 'Ben parker',
  };

  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
