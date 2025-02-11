import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  ViewChildren,
  QueryList, AfterViewInit
} from '@angular/core';
import {Message} from "./message.model";
import {Subject} from "rxjs";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, AfterViewInit {

  private messagesUpdated = new Subject<Message[]>();
  @Input() messages: Message[] = [];
  @ViewChild('likedIcon')
  private likedIcon: ElementRef;
  @ViewChildren("option") private option: QueryList<ElementRef>;

  constructor(public messagesService: MessagesService){}

  ngOnInit(): void {
    this.messages = this.messagesService.getMessagesList()
  }

  ngAfterViewInit(){
    this.option.changes.subscribe((list?) => {
      list.toArray()[0].nativeElement;
      console.log(list)
    })
  }

  onDelete(id: number){
    const updateMessages = this.messages.filter(message => message.id !== id);
    this.messages = updateMessages;
    this.messagesUpdated.next([...this.messages]);
    console.log('deleted message id ' + id);
  }

  onLiked(message){
    this.messagesService.onLiked(message);
  }

  toggleBox(index){
    let nativeElement = this.option.toArray()[index].nativeElement;
    nativeElement.style.display =
      nativeElement.style.display === "none" || !nativeElement.style.display ? "block" : "none";
  }

}
