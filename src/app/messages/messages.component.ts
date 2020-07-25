import { Component, OnInit } from '@angular/core';
import {Message} from "./message.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  messages: Message[] = [
    {
      icon: 'fa fa-mobile',
      time: new Date(),
      author: 'Mike | Creative Mints',
      content: 'Mechanical Grasshopper'
    },
    {
      icon: 'fa fa-cloud',
      time: new Date(),
      author: 'Dash',
      content: 'Assistant App - Weather Module'
    }
  ]

}
