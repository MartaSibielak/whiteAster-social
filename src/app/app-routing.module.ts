import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessagesComponent} from "./messages/messages.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
