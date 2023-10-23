import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline template!!!</h1>
  // <p>Angular is Awesome</p>`,
  // styleUrls: ['./app.component.scss']
  styles: [ `h1 {color: red; font-size: 40px; font-weight: bold;}`, `p {color: green; font-size: 20px; font-weight: normal}` ]
})
export class AppComponent implements OnInit {

  title = 'hotelInventoryApp';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }


  @ViewChild('name', { static: true }) name!: ElementRef;


  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hillton Hotel";
  }

  role = "Admin";
}
