import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // when this att. changes, the state of the component also changes, cuz this makes changes in the DOM.
  // you can use the concept of zone.js or signals to do so.
  selectedUser = signal(DUMMY_USERS[0]);

  // just like a getter
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // getter: its used as a property in the template.
  // get imagePath() {
  //   this.onSelectUser();
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
