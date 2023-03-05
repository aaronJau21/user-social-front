import { Component } from '@angular/core';

interface MenuItems {
  icon: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  menuItem: MenuItems[] = [
    {
      icon: 'fa-solid fa-house',
      name: 'Home',
      url: '/home',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      name: 'Search',
      url: '',
    },
    {
      icon: 'fa-brands fa-facebook-messenger',
      name: 'Messages',
      url: '/messages',
    },
    {
      icon: 'fa-regular fa-heart',
      name: 'Notifications',
      url: '',
    },
    {
      icon: 'fa-solid fa-circle-plus',
      name: 'Create',
      url: '',
    },
    {
      icon: 'fa-solid fa-user',
      name: 'Profile',
      url: '/profile',
    },
  ];
}
