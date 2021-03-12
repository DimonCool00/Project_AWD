import {User} from '../user';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  getUsers() {
    let userList: User[];
    userList = [
      new User(1, 'Mark', 25),
      new User(2, 'Tom', 50),
      new User(3, 'Bob', 40),
      new User(4, 'Bob', 40),
      new User(5, 'Bob', 40),
      new User(6, 'Bob', 40),
    ];
    this.loggingService.log('List of users: ' + userList);

    return userList;
  }
}
