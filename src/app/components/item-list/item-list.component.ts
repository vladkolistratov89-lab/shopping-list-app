import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  searchQuery = '';

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.itemService.getItems();
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id);
    this.loadItems(); // Обновляем список после удаления
  }

  search(): void {
    this.items = this.itemService.searchItems(this.searchQuery);
  }
}