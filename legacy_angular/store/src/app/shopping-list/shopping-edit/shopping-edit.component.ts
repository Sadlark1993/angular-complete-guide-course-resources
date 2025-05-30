import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amountInputRef?: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
    // Initialization logic can go here if needed
  }

  onAddItem() {
    const name = this.nameInputRef?.nativeElement.value;
    const amount = this.amountInputRef?.nativeElement.value;

    if (name && amount) {
      const newIngredient = new Ingredient(name, parseInt(amount, 10));
      this.ingredientAdded.emit(newIngredient);
      this.clearInputs();
    }
  }

  private clearInputs() {
    if (this.nameInputRef && this.amountInputRef) {
      this.nameInputRef.nativeElement.value = '';
      this.amountInputRef.nativeElement.value = '';
    }
  }
}
