import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Recipe Name', 'Description test',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/240px-Recipe_logo.jpeg'),
        new Recipe('Fancy Recipe', 'Fancy description',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1000px-Recipe-575434.svg.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
