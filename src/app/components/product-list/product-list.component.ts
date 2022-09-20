import { Component, OnInit  } from '@angular/core';
import { Product } from 'src/app/common/product';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  productSelect: Product = new Product('','','','')

  constructor() {
    for (let i = 0; i < 20; i++) {
      const test : Product = {
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        url:faker.image.image(),
        rate: +faker.random.numeric()
      }
      this.products.push(test)
    }

   }

   onSelect(product: Product)
   {
    this.productSelect = product
   }
  ngOnInit() {
  }





}