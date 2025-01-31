import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent, UserType } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: UserType;

  onSelectUser(id: string) {
    // nullish coalescing operator
    this.selectedUser =
      this.users.find((item) => item.id === id) ?? this.users[0];
  }

  get user() {
    return this.selectedUser;
  }
}
