import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MessagesService} from "../messages.service";
import {Message} from "../messages/message.model";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @ViewChild('wrapper')
  private wrapper: ElementRef;
  open = false;
  constructor() { }

  ngOnInit(): void {}

  openSideBar(event){
    event.preventDefault();
    event.stopPropagation();
    if (this.open === false){
      this.open = true;
      this.wrapper.nativeElement.classList.add('section-wrapper');
    }else if (this.open === true){
      this.open = false;
      this.wrapper.nativeElement.classList.remove('section-wrapper');
    }
  }

  clickedOutside(e: Event){
    this.open = false;
    this.wrapper.nativeElement.classList.remove('section-wrapper');
  }

}
