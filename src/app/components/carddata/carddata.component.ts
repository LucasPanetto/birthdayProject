import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carddata',
  templateUrl: './carddata.component.html',
  styleUrls: ['./carddata.component.scss'],
})
export class CarddataComponent implements OnInit {
  public brazilMonth: string = "Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro";

  constructor() { }

  ngOnInit() {}

}
