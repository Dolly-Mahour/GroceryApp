import { Component } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { CommonModule, NgIf } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
import AOS from 'aos';
import * as bootstrap from 'bootstrap';
import { Route, Router } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';
import Toast from 'bootstrap/js/dist/toast';

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
    AOS.init({
      duration: 1000,
      once: true
    });
    this.S_ProductList.BindWIthLocalstorage();
    this.S_ProductList.ProductObservableList.subscribe(products => {
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
    const toastEl = document.getElementById('SucessToast');
    if (toastEl) {
      console.log("CALLING THE TOAST TO OPEN BUTTON ---")
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
  IncreaseQuantity(product: any) {

    this.S_Cart.AddProductQuantity(product)
    product.QuantityAddedToCart++;
    this.S_ProductList.UpdateProduct(product);
  }
  DecreaseQuantity(product: any) {
    this.S_Cart.DecreaseProductQuantity(product);
    product.QuantityAddedToCart--;
    this.S_ProductList.UpdateProduct(product);
  }
  ProductDetails(p: any) {
    console.log("Navigating to product details page --", p);
    this.router.navigate(['ProductDetails', p.ProductId]);
  }
}
