import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carddate',
  templateUrl: './carddate.component.html',
  styleUrls: ['./carddate.component.scss'],
})
export class CarddateComponent implements OnInit {
  public brazilMonth: string = "Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro";
  @Output() dateEventEmitter = new EventEmitter();
  public date: string = new Date().toString();
  
  constructor() { }

  ngOnInit() {
    this.dateEventEmitter.emit(new Date(this.date));
  }

  public change(){
    this.dateEventEmitter.emit(new Date(this.date));
  }

}
