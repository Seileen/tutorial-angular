import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  producto: Product | undefined; 

  constructor(private route: ActivatedRoute, private cartService: CartService) //injection del service ActivatedRoute
  //ActivatedRoute è un service che serve per prendere i parametri nella route, che in questo caso è /products/#productid. Lo facciamo nell'ngOnInit
  {}

  ngOnInit(): void {
    //prendo il product id dalla route
    const routeParams = this.route.snapshot.paramMap; //snapshot contiene informazioni sulla route attiva in questo momento
    const productIdFromRoute = Number(routeParams.get('productId'));
    //cerco il product corrispondente
    this.producto = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product)
  {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log(this.cartService.getItems());
  }

}
