import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-route-2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './route-2.component.html',
  styleUrl: './route-2.component.css'
})


export class Route2Component {

  notif: boolean = false;

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    lastname: new FormControl(null, [
      Validators.required
    ]),
    mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{11}$/)
    ]),
    username: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
  })

  get name() {
    return this.registrationForm.get('name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get lastname() {
    return this.registrationForm.get('lastname');
  }
  get mobile() {
    return this.registrationForm.get('mobile');
  }
  get username() {
    return this.registrationForm.get('username');
  }
  get password(){
    return this.registrationForm.get('password');
  }

  passwordValidator(password: any) {
    const value = password.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasDigits = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!hasUpperCase || !hasLowerCase || !hasDigits || !hasSpecialChar) {
      return true;
    }
    return false;
  }

  onSubmit(){
    this.notif = true;
  }
}
