import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cardinput',
  templateUrl: './cardinput.component.html',
  styleUrls: ['./cardinput.component.scss'],
})
export class CardinputComponent implements OnInit {
  @Output() inputEventEmitter = new EventEmitter();
  @Input() inputText: string = "";

  constructor() { }

  ngOnInit() {}

  public inputChanged(){
    this.inputEventEmitter.emit(this.inputText);
  }
}
