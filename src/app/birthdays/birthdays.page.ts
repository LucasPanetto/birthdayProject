import { Component, OnInit } from '@angular/core';
import data from '../../resources/data.json';
import { dateJsonModel } from '../models/dateModel.js';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.page.html',
  styleUrls: ['./birthdays.page.scss'],
})
export class BirthdaysPage implements OnInit {
  public listBirthdaysWithOutFilter: dateJsonModel[] = new Array() as dateJsonModel[];
  public listBirthdays: dateJsonModel[] = new Array() as dateJsonModel[];
  public date: Date;
  public inputText: string = "";

  constructor() {
  }

  ngOnInit() {
    data.forEach(element => {
      this.listBirthdaysWithOutFilter.push({
        name: element.name,
        birthday: new Date(new Date(element.birthday).toLocaleString("en-US", { timeZone: "Australia/Brisbane" }))
      } as dateJsonModel);
    });
  }

  public dateChanged(param: Date) {
    this.listBirthdays = new Array() as dateJsonModel[];

    this.date = (new Date(param));
    this.inputText = "";

    this.listBirthdays = this.groupBy(this.listBirthdaysWithOutFilter.filter(x => x.birthday.getMonth() == this.date.getMonth()), 'birthday');
  }

  public inputChanged(param) {
    this.inputText = param;
    this.date = new Date();

    this.listBirthdays = this.groupBy(this.listBirthdaysWithOutFilter.filter(x => x.name.toUpperCase().indexOf(this.inputText.toUpperCase()) >= 0), 'birthday');
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
