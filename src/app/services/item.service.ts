import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Молоко', category: 'Продукты', quantity: 2, price: 80, dateAdded: new Date('2025-11-25') },
    { id: 2, name: 'Порошок для стирки', category: 'Бытовая химия', quantity: 1, price: 250, dateAdded: new Date('2025-11-20') },
    { id: 3, name: 'Хлеб', category: 'Продукты', quantity: 1, price: 40, dateAdded: new Date('2025-11-28') }
  ];

  private nextId = 4;

  getItems(): Item[] {
    return [...this.items];
  }

  addItem(item: Omit<Item, 'id' | 'dateAdded'>): void {
    const newItem: Item = {
      ...item,
      id: this.nextId++,
      dateAdded: new Date()
    };
    this.items.push(newItem);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  searchItems(query: string): Item[] {
    if (!query) {
      return this.getItems();
    }
    const lowerQuery = query.toLowerCase();
    return this.items.filter(item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }
}