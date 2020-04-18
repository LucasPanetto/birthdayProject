import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  public heroes: string[] = ["teste","aaa"];

  constructor() { }

  ngOnInit() {}

}
