import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingrName: ElementRef;
  @ViewChild('amountInput') ingrAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.shoppingListService.onAdding(
      new Ingredient(this.ingrName.nativeElement.value,
                     this.ingrAmount.nativeElement.value));
  }

}
