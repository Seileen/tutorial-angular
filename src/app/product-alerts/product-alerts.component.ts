import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product; //viene presa con il binding alla riga 14 di product-list.component.html
  @Output() notify = new EventEmitter(); //notify eredita da eventemitter il metodo .emit(), che emette un evento a ogni cambio di valore di notify

  constructor() {}

  ngOnInit() {}
}
