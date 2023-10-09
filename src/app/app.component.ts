import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template!!!</h1>
  // <p>Angular is Awesome</p>`,
  // styleUrls: ['./app.component.scss']
  styles: [ `h1 {color: red; font-size: 40px; font-weight: bold;}`, `p {color: green; font-size: 20px; font-weight: normal}` ]
})
export class AppComponent {
  title = 'hotelInventoryApp';

  role = "Admin";
}
