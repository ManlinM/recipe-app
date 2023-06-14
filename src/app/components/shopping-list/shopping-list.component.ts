import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
//create an array of ingredients for the template to generate shopping list
  ingredients: Ingredient[]=[ new Ingredient('Carrots',5),new Ingredient('Potato',10)];
}
