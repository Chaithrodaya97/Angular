import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService:ProductService) { }

  product: Product = {
    productId: 3,
    name : 'Mobile',
    brand :'Mi',
    price : 20000
  }

  onSubmit()
  {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe();
  }
  ngOnInit() {
  }

}
