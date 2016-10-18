import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <h1>Inline template</h1>
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
