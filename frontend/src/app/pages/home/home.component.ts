import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public years: number[] = [];

  constructor() {
    const anoAtual = new Date().getFullYear();
    this.years = Array.from({ length: 50 }, (v, i) => anoAtual - i);
  }
}
