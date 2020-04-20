import { Component, OnInit, Input } from '@angular/core';
import { dataJsonModel } from 'src/app/models/dataModel';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})

export class CardlistComponent implements OnInit {
  @Input() listBirthdays: dataJsonModel[];
  @Input() date: Date;
  public cause: string = "";

  constructor() {
    this.date = new Date(this.date);
  }

  ngOnInit() {
    this.listBirthdays = this.groupBy(this.listBirthdays, 'birthday');
    console.log(this.listBirthdays);
  }

  private groupBy(colecao, propriedade) {
    var agrupado = [];
    colecao.forEach(function (i) {
      var foiAgrupado = false;
      agrupado.forEach(function (j) {
        if (j.Key == i[propriedade].toString()) {
          j.Elements.push(i);
          foiAgrupado = true;
        }
      });
      if (!foiAgrupado) agrupado.push({ Key: i[propriedade], Elements: [i] });
    });
    return agrupado;
  }
}
