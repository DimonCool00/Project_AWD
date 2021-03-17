import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  logged = false;
  registrationForm = new FormGroup({
    username: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$')),
    passwordrep: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.email)
  });

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
