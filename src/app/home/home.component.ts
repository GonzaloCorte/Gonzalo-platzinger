import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users = [
    {nick: 'Eduardo', subnick: 'Mi mensaje personal', status: 'online', age: 28, email: 'eduardo@platzi.com', friend: true},
    {nick: 'Yuliana', subnick: 'Mi mensaje personal', status: 'busy', age: 25, email: 'yuliana@platzi.com', friend: true},
    {nick: 'Freddy', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: false},
  ];

  friends: User [];
  constructor() {
    let user1: User = {
      nick: 'Eduardo',
      subnick: 'ElEdu',
      age: 32,
      email: 'aa@aa.com',
      friend: true,
      uid: 1
    };
    let user2: User = {
      nick: 'Pedro',
      subnick: 'pepe',
      age: 19,
      email: 'aa1@aa.com',
      friend: true,
      uid: 1
    };
    let user3: User = {
      nick: 'Josefa',
      subnick: 'jochi',
      age: 24,
      email: 'aa2@aa.com',
      friend: true,
      uid: 1
    };
    let user4: User = {
      nick: 'Marta',
      subnick: 'martu',
      age: 30,
      email: 'aa4@aa.com',
      friend: false,
      uid: 1
    };
    let user5: User = {
      nick: 'Mamerto',
      subnick: 'mame',
      age: 31,
      email: 'aa45@aa.com',
      friend: false,
      uid: 1
    };

    this.friends = [user1, user2, user3, user4, user5];
  }

  ngOnInit() {
  }

}
