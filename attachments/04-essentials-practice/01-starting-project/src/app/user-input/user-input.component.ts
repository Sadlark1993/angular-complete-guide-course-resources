import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { userInputService } from './user-input.service';
import { InputObj, OutputObj } from './user-input.models';

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
  private userInputService = inject(userInputService);
  @Output() tableData = new EventEmitter<OutputObj[]>();

  onSubmit() {
    console.log(this.data);
    const tableData = this.userInputService.calculateInvestmentResults(this.data);
    console.log(tableData);
    this.tableData.emit(tableData);
  }

}
