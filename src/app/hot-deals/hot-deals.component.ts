import { Component } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';

@Component({
  selector: 'app-hot-deals',
  imports: [CountdownModule, NgFor, SlickCarouselModule],
  templateUrl: './hot-deals.component.html',
  styleUrl: './hot-deals.component.css'
})
export class HotDealsComponent {
  constructor(private S_ProductList: ItemsListService, private S_carousel: SlickCarouselService) {

  }
  ngOnInit(): void {
    this.ProductList = this.S_ProductList.ProductsList
    this.slideConfig = this.S_carousel.slideConfig;
    console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
  Brands:string[]=["images/brand1.png","images/brand2.png","images/brand3.png","images/brand4.png","images/brand5.png"]
  slideConfig: any;
  ProductList: ItemsClass[] = [];

}
