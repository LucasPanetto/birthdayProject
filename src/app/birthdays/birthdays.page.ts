import { Component, OnInit } from '@angular/core';
import data from '../../resources/data.json';
import { dataJsonModel } from '../models/dataModel.js';
import { listDateModel } from '../models/listDateModel';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.page.html',
  styleUrls: ['./birthdays.page.scss'],
})
export class BirthdaysPage implements OnInit {
  public listBirthdaysWithOutFilter: dataJsonModel[] = new Array() as dataJsonModel[];
  public listBirthdays: dataJsonModel[] = new Array() as dataJsonModel[];
  public date: Date;
  public inputText: string = "";
  constructor() { }

  ngOnInit() {
    data.forEach(element => {
      this.listBirthdaysWithOutFilter.push({
        name: element.name,
        birthday: new Date(element.birthday)
      } as dataJsonModel);
    });
  }

  public dateChanged(param: Date) {
    this.listBirthdays = new Array() as dataJsonModel[];

    this.date = (new Date(param));
    this.inputText = "";

    this.listBirthdays = this.listBirthdaysWithOutFilter.filter(x => x.birthday.getMonth() == this.date.getMonth());
  }

  public inputChanged(param) {
    this.inputText = param;
    this.date = new Date();

    const listNames = [];

    this.listBirthdaysWithOutFilter.forEach(element => {
      if (element.name.toUpperCase().search(this.inputText)) {
        listNames.push(element.name);
      }
    });
  }

  private returnDateMonthYear(x: Date) {
    return ((x.getUTCMonth() + 1) + "/" + x.getUTCFullYear());
  }
}
