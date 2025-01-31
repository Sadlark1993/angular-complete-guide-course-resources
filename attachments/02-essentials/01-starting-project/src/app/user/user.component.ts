import { Component, computed, EventEmitter, input, Input, Output, output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// You can user interfaces to do it also
export type UserType = {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: UserType;
  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  };

  onClickUser() {
    // This will emit the data and trigger the event with the name of the @output
    this.select.emit(this.user.id);
  }
}
