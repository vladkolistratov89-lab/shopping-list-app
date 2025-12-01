export interface Item {
  id: number;
  name: string;
  category: string; // Например, "Продукты", "Бытовая химия"
  quantity: number;
  price: number;
  dateAdded: Date;
}