import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../services/shop.service';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:Product[] = [];
  constructor(
    private shopService: ShopService,
  ) {
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.shopService.getProducts();
  }

}
