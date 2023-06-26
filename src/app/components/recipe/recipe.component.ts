import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipeToDiplay:Recipe;
  selectedRecipe:boolean=false;
  addToRecipeList(recipes:Recipe){
    this.recipeToDiplay=recipes;
    this.selectedRecipe=true;
  }
}
