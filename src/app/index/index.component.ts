import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dollar: number | undefined;
  euro: number | undefined;
  tenge: any;
  rub: number | undefined;
  toDate: Date = new Date();
  people = 0.982323;
  num = 20;
  name = 'admin';

  constructor() {}

  ngOnInit(): void {

  }

}
