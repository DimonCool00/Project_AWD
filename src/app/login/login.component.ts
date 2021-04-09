import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import {User} from '../user';
import {LoggingService} from '../services/logging.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CanComponentDeactivate, ExitGuard} from '../guards/exit.guard';
export class User1{
  constructor(public username: string | undefined,
              public password1: string | undefined)
  { }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, LoggingService, ExitGuard]
})
export class LoginComponent implements OnInit, CanComponentDeactivate {

  // userService: UserService;
  userList: User[] | undefined;
  logged = false;
  username: string | undefined;
  password1: string | undefined;
  users: User1 [] = [];
  saved: boolean = false;
  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }
  save(){
    this.saved = true;
  }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$')),
  });
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('You didn\'t logged in\n' + 'You want to exit page? Some features will not be available');
    }
    else {
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
  addUser(){
    this.users.push(new User1(this.username, this.password1));
  }
  printResult(form: NgForm){
    console.log(form);
  }
  ngOnInit(): void {
  }

}
