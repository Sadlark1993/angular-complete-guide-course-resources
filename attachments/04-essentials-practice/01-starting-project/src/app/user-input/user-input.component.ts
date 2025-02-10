import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type InputObj = {
  iInvest: number | null,
  aInvest: number | null,
  eReturn: number | null,
  duration: number | null
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  public data: InputObj = {
    iInvest: null,
    aInvest: null,
    eReturn: null,
    duration: null
  };

  onSubmit() {
    console.log(this.data);
  }

}
