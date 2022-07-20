import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a second test',
      'https://www.oreilly.com/content/wp-content/uploads/sites/2/2020/01/6297898421_e1abeb3d98_o_crop-b932fa6bb757d4ecc1fa46e6534dc322.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
