import { Component } from '@angular/core';
import { Form } from './components/form/form';
import { LoginData } from './model/login-data';

@Component({
  selector: 'app-login',
  imports: [Form],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected name: string = '';
  protected email: string = '';
  protected message: string = '';

  public handleLoginData(event: LoginData): void {
    this.name = event.name;
    this.email = event.email;
    this.message = event.message;
  }
}
