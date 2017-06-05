import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'A super tasty schnitzel with fries',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [new Ingredient('Pork', 1), new Ingredient('Fries', 20)]),
        new Recipe('BK Burger', 'Angus Bacon Cheese Steak',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Buns', 2), new Ingredient('Bacon', 4)])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    onAddIngredients(ingredients: Ingredient[]) {
        this.slService.onAddIngredients(ingredients);
    }
}
