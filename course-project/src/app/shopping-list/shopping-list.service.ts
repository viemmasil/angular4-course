import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 4),
        new Ingredient('Oranges', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    onAdding(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.getIngredients());
    }
}
