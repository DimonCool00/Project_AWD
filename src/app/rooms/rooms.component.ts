import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms = [
    { id: 1, typeroom: 'standard'},
    { id: 2, typeroom: 'juniorlux'},
    { id: 3, typeroom: 'lux'},
    { id: 4, typeroom: 'viplux'},
    { id: 5, typeroom: 'presidential'},
    { id: 0, typeroom: 'all'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
