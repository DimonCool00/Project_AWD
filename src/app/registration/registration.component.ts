import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User1} from '../login/login.component';
import {CanComponentDeactivate} from '../guards/exit.guard';
import {Observable} from 'rxjs';
export class User2{
  constructor(public username: string | undefined,
              public password1: string | undefined,
              public email: string | undefined,
              public password2: string | undefined,
              public phone: string | undefined)
  { }
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, CanComponentDeactivate {
  logged = false;
  username: string | undefined;
  password1: string | undefined;
  email: string | undefined;
  public password2: string | undefined;
  public phone: string | undefined;
  users: User2 [] = [];
  registrationForm = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$')),
    passwordrep: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.email)
  });
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.logged) {
      return confirm('You didn\'t logged in\n' + 'You want to exit page? Some features will not be available');
    }
    else {
      return true;
    }
  }
  addUser(){
    this.users.push(new User2(this.username, this.password1,this.email,this.password2,this.phone));
  }
  printResult(form: NgForm){
    console.log(form);
  }
  // tslint:disable-next-line:typedef
  get usernameReg() {
    return this.registrationForm.get('username');
  }

  arePasswordsSame: boolean | undefined;

  // tslint:disable-next-line:typedef
  checkPasswords() {
    // @ts-ignore
    const pass = this.registrationForm.get('password').value;
    // @ts-ignore
    const confirmPass = this.registrationForm.get('passwordrep').value;

    this.arePasswordsSame = pass === confirmPass;
  }
  login() {
    console.log();
    this.logged = true;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
