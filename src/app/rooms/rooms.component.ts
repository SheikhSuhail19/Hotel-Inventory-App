import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: [ './rooms.component.scss' ]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName: string = 'Hilltop Hotel';

  numberOfRooms: number = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  title: string = '';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor() { }

  ngOnInit(): void {

    console.log(this.headerComponent);

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
        checkInTime: new Date('11-November-2022'),
        checkOutTime: new Date('22-August-2023'),
        rating: 2.3,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
        checkInTime: new Date('11-November-2022'),
        checkOutTime: new Date('22-August-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
        price: 1500,
        photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
        checkInTime: new Date('11-November-2022'),
        checkOutTime: new Date('22-August-2023'),
        rating: 4.8782342,
      }
    ];
  }

  // don't implement ngOnInit() &  ngDoCheck() together
  ngDoCheck(): void {
    console.log('onChages is called');
  }

  // don't update view here, it'll give error
  ngAfterViewInit(): void {
    // console.log(this.headerComponent)
    this.headerComponent.title = "Rooms View"

    this.headerChildrenComponent.last.title = "Last Title";

    // this.headerChildrenComponent.get(0);
  }

  ngAfterViewChecked(): void {
    console.log('in afterViewCheck is called');
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms new title';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
      price: 2500,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
      checkInTime: new Date('11-November-2022'),
      checkOutTime: new Date('22-August-2023'),
      rating: 3.3,
    }

    // this.roomList.push(room)

    this.roomList = [ ...this.roomList, room ]

  }

}
