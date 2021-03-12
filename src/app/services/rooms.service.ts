import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class RoomsService{
  private rooms: string[] = [ 'Lux2', 'Presidential1',  'Lux3', 'Standard2'];
  constructor(
    private loggingService: LoggingService) {
  }
  getData(): string[] {

    return this.rooms;
  }

  addRoom(room: string ){

    this.rooms.push(room);
    this.loggingService.log('List of rooms: ' + this.rooms);
  }
}
