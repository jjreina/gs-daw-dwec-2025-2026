import { Component } from '@angular/core';
import { FormTextarea } from '../form-textarea/form-textarea';

@Component({
  selector: 'app-form',
  imports: [FormTextarea],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {}
