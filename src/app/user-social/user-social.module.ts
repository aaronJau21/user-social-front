import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSocialRoutingModule } from './user-social-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    UserSocialRoutingModule
  ]
})
export class UserSocialModule { }
