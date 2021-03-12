import { Component, OnInit } from '@angular/core';
import {RoomsService} from '../services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]
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

  items: string[] = [];
  room!: string;
  constructor(private roomsService: RoomsService){}

  addItem(room: string){

    // tslint:disable-next-line:no-bitwise
    this.roomsService.addRoom(room);
  }
  ngOnInit(){
    this.items = this.roomsService.getData();
  }

}
