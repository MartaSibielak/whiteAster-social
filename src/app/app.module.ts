import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { DateAgoPipe } from './date-ago.pipe';
import { MessageOptionComponent } from './message-option/message-option.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MessagesComponent,
    SidebarComponent,
    DateAgoPipe,
    MessageOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
