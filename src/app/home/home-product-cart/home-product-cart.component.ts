import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home-product-cart',
  templateUrl: './home-product-cart.component.html',
  styleUrls: ['./home-product-cart.component.scss']
})
export class HomeProductCartComponent {

 @Input() product:any

}
