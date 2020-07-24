import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('wrapper')
  private wrapper: ElementRef;

  open = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSideBar(){
    if (this.open === false){
      this.open = true;
      this.wrapper.nativeElement.classList.add('section-wrapper');
    }else if (this.open === true){
      this.open = false;
      this.wrapper.nativeElement.classList.remove('section-wrapper');
    }
  }

}
