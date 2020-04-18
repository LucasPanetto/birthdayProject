import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public brazilMonth: string = "Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro";
  public data: string = "teste";

  constructor() { }

  ngOnInit() {
  }

  public segmentChanged(a: any): void {
    var teste = a;
  }

}
