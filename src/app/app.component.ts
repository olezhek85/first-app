import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <h1>Inline template</h1>
       <fa-other></fa-other>
       <fa-another></fa-another>
    `,
  styles: [`
      h1 {
        color: red;
      }
  `]
})
export class AppComponent {
  title = 'I changed it!';
}
