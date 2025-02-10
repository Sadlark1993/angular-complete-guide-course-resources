import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultComponent } from './result/result.component';
import { OutputObj } from './user-input/user-input.models';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultComponent],
})
export class AppComponent {
  tableData?: OutputObj[];
  onCalculate(tableData: OutputObj[]) {
    this.tableData = tableData;
  }
}
