import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Hilltop Hotel';

  numberOfRooms: number = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
      checkInTime: new Date('11-November-2022'),
      checkOutTime: new Date('22-August-2023')
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
      checkInTime: new Date('11-November-2022'),
      checkOutTime: new Date('22-August-2023')
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free wifi2, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fcontent%2Fdam%2Fseleqtions%2FConnaugth%2FTCPD_PremiumBedroom4_1235.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&tbnid=Uruq9vSWss6_FM&vet=12ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.seleqtionshotels.com%2Fen-in%2Fconnaught-new-delhi%2Frooms-and-suites%2F&docid=RZ-828Kk0U3rrM&w=1078&h=750&q=hotel%20room&hl=en&ved=2ahUKEwjoxavMy-aBAxXsZmwGHX4oCKsQMygAegQIARBu',
      checkInTime: new Date('11-November-2022'),
      checkOutTime: new Date('22-August-2023')
    }
  ]

  constructor() { }


  ngOnInit(): void { }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
