import { Component, output } from '@angular/core';
import { LoginData } from '../../model/login-data';

@Component({
  selector: 'app-form-content',
  imports: [],
  templateUrl: './form-content.html',
  styleUrl: './form-content.css',
})
export class FormContent {
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
