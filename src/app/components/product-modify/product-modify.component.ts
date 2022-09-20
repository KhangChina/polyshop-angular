import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {
  product : Product
  constructor(private route: ActivatedRoute) {
    this.product = new Product('','','','')

    if(route.snapshot.params['id'])
    this.product.id = route.snapshot.params['id']
    
   }

  ngOnInit() {
  }

}
