import { Component, input, output } from '@angular/core';
import { LoginData } from './model/login-data';
import { Form } from './components/form/form';

@Component({
  selector: 'app-login',
  imports: [Form],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public onSubmit = output<LoginData>();

  public submit(name: string, email: string, message: string): void {
    let logingData: LoginData = {
      name: name,
      email: email,
      message: message,
    };
    this.onSubmit.emit(logingData);
  }
}
