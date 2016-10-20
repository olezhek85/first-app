import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <h1>Root component</h1>
       <app-databinding></app-databinding>
    `
})
export class AppComponent {
  title = 'I changed it!';
}
