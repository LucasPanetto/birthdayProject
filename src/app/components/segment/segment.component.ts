import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  @Output() segmentEventEmmiter = new EventEmitter();
  public segmentValue = 1;

  constructor() { }

  ngOnInit() { }

  segmentChange() {
    this.segmentEventEmmiter.emit(this.segmentValue);
  }

}
