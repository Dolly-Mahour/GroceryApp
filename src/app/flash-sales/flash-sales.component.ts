import { Component } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { CommonModule, NgIf } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
import { log } from 'console';
import { Route, Router } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';

@Component({
  selector: 'app-flash-sales',
  imports: [CommonModule, CountdownModule, SlickCarouselModule, NgIf],
  templateUrl: './flash-sales.component.html',
  styleUrl: './flash-sales.component.css'

})
export class FlashSalesComponent {
  constructor(private S_ProductList: ItemsListService, private S_carousel: SlickCarouselService, private router: Router, private S_Cart: ItemsInCartService) {

  }
  ngOnInit(): void {
    this.S_ProductList.GetTheListOfProducts();
    this.S_ProductList.ProductObservableList$.subscribe(products => {
      this.ProductList = products;
    });
    this.slideConfig = this.S_carousel.slideConfig;
    console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
  slideConfig: any;
  ProductList: ItemsClass[] = [];
  AddItemToCart(p: any) {
    console.log("ADDING THE ITEM TO CART IS --", p);
    if (!p.IsAdded) {
      console.log("THIS ITEM IS NOT ADDED TO CART --------------")
      this.S_Cart.AddToCart(p);
    }
    else {
      console.log("THIS ITEM IS ALREADY ADDED TO CART --------------")
    }
    this.router.navigate(['cart']);
  }
  IncreaseQuantity(product: any) {
    product.QuantityAddedToCart++;
    this.S_ProductList.updateProduct(product);
  }
  DecreaseQuantity(product: any) {
    if (product.QuantityAddedToCart > 0) {
      this.S_Cart.DecreaseProductQuantity(product);
    }
  }
  ProductDetails(p: any) {
    console.log("Navigating to product details page --", p);
    this.router.navigate(['ProductDetails', p.ProductId]);
  }
}
