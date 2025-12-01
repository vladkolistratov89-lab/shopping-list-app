import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  itemName = '';
  itemCategory = '';
  itemQuantity = 1;
  itemPrice = 0;

  constructor(private itemService: ItemService) {}

  onSubmit(): void {
    if (!this.itemName || !this.itemCategory || this.itemQuantity <= 0 || this.itemPrice < 0) {
      alert('Пожалуйста, заполните все поля корректно.');
      return;
    }

    this.itemService.addItem({
      name: this.itemName,
      category: this.itemCategory,
      quantity: this.itemQuantity,
      price: this.itemPrice
    });

    // Очищаем форму
    this.itemName = '';
    this.itemCategory = '';
    this.itemQuantity = 1;
    this.itemPrice = 0;

    alert('Товар успешно добавлен!');
  }
}