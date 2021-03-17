import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import {User} from '../user';
import {LoggingService} from '../services/logging.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, LoggingService]
})
export class LoginComponent implements OnInit {

  // userService: UserService;
  userList: User[] | undefined;
  logged = false;
  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$')),
  });
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.logged) {
      return confirm(
        'You didn\'t logged in\n' +
        'You want to exit page? Some features will not be available'
      );
    } else {
      return true;
    }
  }
  get usernameLogin() {
    return this.loginForm.get('username');
  }
  getUsers() {
    this.userList = this.userService.getUsers();
  }
    login() {
    console.log();
    this.logged = true;
   }
  ngOnInit(): void {
  }

}
