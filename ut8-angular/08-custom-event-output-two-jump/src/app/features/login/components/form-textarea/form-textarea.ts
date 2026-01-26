import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-textarea',
  imports: [],
  templateUrl: './form-textarea.html',
  styleUrl: './form-textarea.css',
})
export class FormTextarea {
  public labelText = input<string>('');
  public rows = input<number>(0);
}
