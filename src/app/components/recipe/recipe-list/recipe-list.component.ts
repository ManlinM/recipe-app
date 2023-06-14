import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
//1. create an array of recipes object
//this Recipe type is created by ourself in the root of recipe 
  recipes:Recipe[]=[ new Recipe('Test Recipe','This is just a test','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl-768x1024.jpg'),
  new Recipe('Test Recipe','This is just a test','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl-768x1024.jpg')];
}
