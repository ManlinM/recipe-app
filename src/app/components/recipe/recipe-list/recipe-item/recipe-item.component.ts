import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() recipeList: Recipe;
@Output() addListEmitter = new EventEmitter<void>();
addToList(){
  this.addListEmitter.emit();
}
}
