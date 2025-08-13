import { Component } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
import { log } from 'console';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-flash-sales',
  imports: [CommonModule,CountdownModule,SlickCarouselModule],
  templateUrl: './flash-sales.component.html',
  styleUrl: './flash-sales.component.css'
  
})
export class FlashSalesComponent {
  constructor(private S_ProductList: ItemsListService,private S_carousel :SlickCarouselService,private router: Router) {

  }
  ngOnInit(): void {
    this.ProductList = this.S_ProductList.ProductsList
    this.slideConfig = this.S_carousel.slideConfig;
    console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
  slideConfig :any;
  ProductList: ItemsClass[] = [];
  AddItemToCart(p:any){
    console.log("ADDING THE ITEM TO CART IS --",p);
    // this.S_ProductList.UpdateItemsInCart(p);
    // this.router.navigate(['cart']);
  }
  ProductDetails(p:any){
    console.log("Navigating to product details page --",p);
    this.router.navigate(['ProductDetails',p.ProductId]);
  }
}
