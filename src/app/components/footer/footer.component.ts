import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year: number;

  constructor(){
    // Toma el año actual de mi equipo
    this.year = new Date().getFullYear() + 1;
  }
}
