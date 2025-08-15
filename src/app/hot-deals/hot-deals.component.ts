import { Component } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hot-deals',
  imports: [CountdownModule, NgFor, SlickCarouselModule],
  templateUrl: './hot-deals.component.html',
  styleUrl: './hot-deals.component.css'
})
export class HotDealsComponent {
  constructor(private S_ProductList: ItemsListService, private S_carousel: SlickCarouselService,private router:Router) {

  }
  ngOnInit(): void {
    this.S_ProductList.ProductObservableList$.subscribe(products =>{
      this.ProductList = products
    })
    this.slideConfig = this.S_carousel.slideConfig;
    // console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
  Brands:string[]=["images/brand1.png","images/brand2.png","images/brand3.png","images/brand4.png","images/brand5.png"]
  slideConfig: any;
  ProductList: ItemsClass[] = [];
  ProductDetails(p: any) {
    console.log("Navigating to product details page --", p);
    this.router.navigate(['ProductDetails', p.ProductId]);
  }
}
