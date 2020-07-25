import {Message} from "./messages/message.model";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MessagesService {

  private messagesUpdated = new Subject<Message[]>();

   private messages: Message[] = [
    {
      id: 0,
      icon: 'fa fa-mobile',
      time: new Date("July 21, 2019 01:15:00"),
      author: 'Mike | Creative Mints',
      content: 'Mechanical Grasshopper',
      like: false
    },
    {
      id: 1,
      icon: 'fa fa-cloud',
      time: new Date("July 25, 2020 10:45:00"),
      author: 'Dash',
      content: 'Assistant App - Weather Module',
      like: false
    },
    {
      id: 2,
      icon: 'fa fa-globe',
      time: new Date("July 24, 2020 10:45:00"),
      author: 'Ghulam ツ',
      content: 'Upcoming web agency',
      like: false
    },
    {
      id: 3,
      icon: 'fa fa-desktop',
      time: new Date("July 24, 2020 10:45:00"),
      author: 'Bill S Kenney',
      content: 'Bamboo Branding Wall Piece - not flat',
      like: false
    }
  ];

   getMessagesList(){
      return [...this.messages]
   }

  onDelete(id: number){
    const updateMessages = this.messages.filter(message => message.id !== id);
    this.messages = updateMessages;
    this.messagesUpdated.next([...this.messages]);
    console.log('deleted message id ' + id);
  }

  onLiked(message){
    if (message.like === false){
      let index = this.messages.indexOf(message);
      message.like = true;
      this.messages[index] = message;
    } else {
      let index = this.messages.indexOf(message);
      message.like = false;
      this.messages[index] = message;
    }
  }


}
