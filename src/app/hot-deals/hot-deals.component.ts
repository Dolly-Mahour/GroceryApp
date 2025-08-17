import { Component } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
import { Router } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';

@Component({
  selector: 'app-hot-deals',
  imports: [CountdownModule, NgFor, SlickCarouselModule,NgIf],
  templateUrl: './hot-deals.component.html',
  styleUrl: './hot-deals.component.css'
})
export class HotDealsComponent {
  constructor(private S_ProductList: ItemsListService, private S_carousel: SlickCarouselService, private router: Router,private S_Cart :ItemsInCartService) {

  }
  ngOnInit(): void {
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.ProductList = products
    })
    this.slideConfig = this.S_carousel.slideConfig;
    // console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
  Brands: string[] = ["images/brand1.png", "images/brand2.png", "images/brand3.png", "images/brand4.png", "images/brand5.png"]
  slideConfig: any;
  ProductList: ItemsClass[] = [];
  ListOfThreeCarousel:string[]=["Featured Products","Top Selling Products","On-sale Products"]
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
