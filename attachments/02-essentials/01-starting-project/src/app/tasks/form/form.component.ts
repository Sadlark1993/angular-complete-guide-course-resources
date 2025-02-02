import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() closeForm = new EventEmitter<void>();

  onCloseForm() {
    this.closeForm.emit();
  }
}
