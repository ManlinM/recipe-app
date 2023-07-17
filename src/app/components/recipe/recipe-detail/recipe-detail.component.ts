import { Component, HostListener, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  isClicked=false;
  
  @HostListener('mouseleave') onmouseleave(){
    this.isClicked=false;
    }
@Input() recipeDetail:Recipe={name:'',description:'',imagePath:''};


}
