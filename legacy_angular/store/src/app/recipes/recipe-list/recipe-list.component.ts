import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://jamdownfoodie.com/wp-content/uploads/2021/05/IMG_3041-585x585.jpg'),
    new Recipe('A Second Test Recipe', 'This is simply a test', 'https://jamdownfoodie.com/wp-content/uploads/2021/05/IMG_3041-585x585.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
