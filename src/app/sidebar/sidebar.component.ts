import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from "../messages.service";
import {Message} from "../messages/message.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() messages: Message[] = [];
  messageLengh: number = 0;
  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messages = this.messagesService.getMessagesList();
    this.messageLengh = this.messages.length
    console.log(this.messageLengh)
  }

  onGetMessages(message){
    this.messages.push(message);
  }

}
