import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe?: Recipe;

  constructor() {
    // Initialization logic can go here if needed
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }
  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
