import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent implements OnInit {

  constructor() { }
  @Input('parentData')product: Product;
  @Output()
  notify=new EventEmitter()
  ngOnInit() {
  }

  sendNotification()
  {
    this.notify.emit("You will be notified when the product becomes prime");
  }

}
