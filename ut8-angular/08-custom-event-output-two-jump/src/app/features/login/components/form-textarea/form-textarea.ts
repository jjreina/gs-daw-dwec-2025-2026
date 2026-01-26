import { Component, input, output } from '@angular/core';
import { LoginData } from '../../model/login-data';

@Component({
  selector: 'app-form-textarea',
  imports: [],
  templateUrl: './form-textarea.html',
  styleUrl: './form-textarea.css',
})
export class FormTextarea {
  public labelText = input<string>('');
  public rows = input<number>(0);

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
