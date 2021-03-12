import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import {User} from '../user';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, LoggingService]
})
export class LoginComponent implements OnInit {

  // userService: UserService;
  userList: User[] | undefined;

  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }

  getUsers() {
    this.userList = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

}
