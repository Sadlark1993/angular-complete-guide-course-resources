import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
  signal,
} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { UserType } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserType;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClickUser() {
    // This will emit the data and trigger the event with the name of the @output
    this.select.emit(this.user.id);
  }
}
