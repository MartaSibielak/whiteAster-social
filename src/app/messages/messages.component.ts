import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Input} from '@angular/core';
import {Message} from "./message.model";
import {Subject} from "rxjs";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  private messagesUpdated = new Subject<Message[]>();
  @Input() messages: Message[] = [];
  @ViewChild('likedIcon')
  private likedIcon: ElementRef;
  private open = false;

  constructor(public messagesService: MessagesService){}

  ngOnInit(): void {
    this.messages = this.messagesService.getMessagesList()
  }

  displayOption(){
    this.open = true;
  }

  // onDelete(id: number){
  //   const updateMessages = this.messages.filter(message => message.id !== id);
  //   this.messages = updateMessages;
  //   this.messagesUpdated.next([...this.messages]);
  //   console.log('deleted message id ' + id);
  // }
  //
  // onLiked(message){
  //   if (message.like === false){
  //     let index = this.messages.indexOf(message);
  //     message.like = true;
  //     this.messages[index] = message;
  //   } else {
  //     let index = this.messages.indexOf(message);
  //     message.like = false;
  //     this.messages[index] = message;
  //   }
  // }

  onDelete(id){
    this.messagesService.onDelete(id);
  }

  onLiked(message){
    this.messagesService.onLiked(message);
  }

}
