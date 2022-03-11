import { Injectable } from '@angular/core';
import {Products} from '../data/products';
import {Product} from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getProducts():Product[] {
    return Products;
  }
}
