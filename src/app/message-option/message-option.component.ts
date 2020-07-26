import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-message-option',
  templateUrl: './message-option.component.html',
  styleUrls: ['./message-option.component.scss']
})
export class MessageOptionComponent implements OnInit {

  private open = false;
  @ViewChildren("dupa") private boxes: QueryList<ElementRef>;
  constructor(private messagesService : MessagesService) { }

  ngOnInit(): void {
  }

  toggleBox(index){
    console.log(index);
    let el = this.boxes.toArray()[index].nativeElement;
    el.style.display =
      el.style.display === "none" || !el.style.display ? "block" : "none";
  }
  onDelete(id){
    this.messagesService.onDelete(id);
  }

  onLiked(message){
    this.messagesService.onLiked(message);
  }
}
