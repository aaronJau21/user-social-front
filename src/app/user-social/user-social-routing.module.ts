import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'home', component:HomeComponent},
      {path:'messages', component:MessagesComponent},
      {path:'profile', component:ProfileComponent},
      {path:'**', redirectTo:'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSocialRoutingModule { }
