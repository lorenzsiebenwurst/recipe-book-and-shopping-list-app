import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Something like a Schnitzl',
      'Try it - Love it!',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Grilling a Squash',
      'I love it!',
      'https://www.oreilly.com/content/wp-content/uploads/sites/2/2020/01/6297898421_e1abeb3d98_o_crop-b932fa6bb757d4ecc1fa46e6534dc322.jpg',
      [new Ingredient('Squash', 1), new Ingredient('Potatoes', 4)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
