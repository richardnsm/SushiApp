import { Injectable } from '@angular/core';
import { Box } from '../models/Box';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: Box[] = []

addToCart(product: Box) {
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}

  constructor() { }
}
