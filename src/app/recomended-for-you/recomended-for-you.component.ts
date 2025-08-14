import { Component } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-recomended-for-you',
  imports: [NgFor, NgIf],
  templateUrl: './recomended-for-you.component.html',
  styleUrl: './recomended-for-you.component.css'
})
export class RecomendedForYouComponent {
  constructor(private S_ProductList: ItemsListService,private router:Router) {

  }
  ngOnInit(): void {
    this.ProductList = this.S_ProductList.ProductsList
    // console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
  ProductList: ItemsClass[] = [];
  ProductDetails(p: any) {
    console.log("Navigating to product details page --", p);
    this.router.navigate(['ProductDetails', p.ProductId]);
  }
}
