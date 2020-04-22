import { Component, OnInit, Input } from '@angular/core';
import { dateJsonModel } from 'src/app/models/dateModel';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})

export class CardlistComponent implements OnInit {
  @Input() listBirthdays: dateJsonModel[];

  constructor() {
  }

  ngOnInit() {
  }


}
