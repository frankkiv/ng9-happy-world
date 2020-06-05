import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: any[];
  constructor( private productService: ProductService ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

}
