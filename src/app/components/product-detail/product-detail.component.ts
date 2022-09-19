import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() product : Product
  constructor() { 
    this.product = new Product('','','','')
  }
  changeDetail(form: NgForm)
  {
    // console.log(form.value)
  }
  ngOnInit() {
  }
 
}
