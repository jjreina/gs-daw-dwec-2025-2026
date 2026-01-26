import { Component, output } from '@angular/core';
import { FormContent } from '../form-content/form-content';
import { LoginData } from '../../model/login-data';

@Component({
  selector: 'app-form',
  imports: [FormContent],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  public emitLoginData = output<LoginData>();

  public handleLoginData(event: LoginData): void {
    this.emitLoginData.emit(event);
  }
}
