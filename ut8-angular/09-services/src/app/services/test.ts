import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test {
  public titleParent: string = 'Service Parent';
  public titleChild: string = 'Service Child';
}
