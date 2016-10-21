import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <h1>Root component</h1>
       <fa-lifecicle *ngIf="!delete"></fa-lifecicle>
       <button (click)="delete = true">Click to Delete</button>
    `
})
export class AppComponent {
  delete = false;
}
