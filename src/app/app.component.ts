import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <h1>Root component</h1>
       <fa-lifecicle *ngIf="!delete" [bindable]="boundValue">
          <p #boundContent>{{test}}</p>
       </fa-lifecicle>
       <button (click)="delete = true">Click to Delete</button>
       <button (click)="test = 'Change value'">Click to Change Content</button>
       <button (click)="boundValue = 2000">Click to Change Binding</button>
    `
})
export class AppComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
