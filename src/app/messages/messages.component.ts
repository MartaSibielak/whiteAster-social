import { Component, OnInit } from '@angular/core';
import {Message} from "./message.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  private date = new Date();
  constructor(){}

  ngOnInit(): void {
  }

  messages: Message[] = [
    {
      icon: 'fa fa-mobile',
      time: new Date("July 21, 2019 01:15:00"),
      author: 'Mike | Creative Mints',
      content: 'Mechanical Grasshopper'
    },
    {
      icon: 'fa fa-cloud',
      time: new Date("July 25, 2020 10:45:00"),
      author: 'Dash',
      content: 'Assistant App - Weather Module'
    },
    {
      icon: 'fa fa-globe',
      time: new Date("July 24, 2020 10:45:00"),
      author: 'Ghulam ツ',
      content: 'Upcoming web agency'
    },
    {
      icon: 'fa fa-desktop',
      time: new Date("July 24, 2020 10:45:00"),
      author: 'Bill S Kenney',
      content: 'Bamboo Branding Wall Piece - not flat'
    }
  ]

}
