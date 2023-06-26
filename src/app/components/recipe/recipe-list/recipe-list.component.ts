import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
//1. create an array of recipes object
//this Recipe type is created by ourself in the root of recipe 
  recipes:Recipe[]=[ new Recipe('Recipe One','Test One','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl-768x1024.jpg'),
  new Recipe('Recipe Two','Test Two','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl-768x1024.jpg')];

  
  @Output() detailEmitter= new EventEmitter<Recipe>;
  addToRecipeList(details:Recipe){
    this.detailEmitter.emit(details);
  }
}
