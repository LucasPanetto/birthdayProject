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
  public segment = 1;
  constructor() {
  }

  ngOnInit() {
    //Lendo arquivo JSON e populando lista de objeto
    data.forEach(element => {
      this.listBirthdaysWithOutFilter.push({
        name: element.name,
        birthday: new Date(new Date(element.birthday).toLocaleString("en-US", { timeZone: "Australia/Brisbane" }))
      } as dateJsonModel);
    });
  }

  //Evento responsável por atualizar a lista quando mudar a data
  public dateChanged(param: Date) {
    this.listBirthdays = new Array() as dateJsonModel[];

    this.date = (new Date(param));
    this.inputText = "";

    this.listBirthdays = this.groupBy(this.listBirthdaysWithOutFilter.filter(x => x.birthday.getMonth() == this.date.getMonth()), 'birthday');
  }

  //Evento responsável por atualizar a lista quando mudar o valor inserido no input
  public inputChanged(param) {
    this.inputText = param;
    this.date = this.date;

    if (!param) {
      debugger;
      this.dateChanged(this.date);
    } else {
      this.listBirthdays = this.groupBy(this.listBirthdaysWithOutFilter.filter(x => x.name.toUpperCase().indexOf(this.inputText.toUpperCase()) >= 0), 'birthday');
    }
  }

  //função para agrupar a lista de dados por data
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
    return agrupado.sort((a, b) => {
      return this.getTime(new Date(b['Key'])) - this.getTime(new Date(a['Key']));
    });
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

}
