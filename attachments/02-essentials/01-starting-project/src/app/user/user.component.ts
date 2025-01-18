import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //when this att. changes, the state of the component also changes, cuz this makes changes in the DOM.
  //this happens because of zone.js
  selectedUser = DUMMY_USERS[0];

  // getter: its used as a property in the template.
  get imagePath() {
    this.onSelectUser();
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
