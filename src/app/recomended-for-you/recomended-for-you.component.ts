import { Component } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';
// import { Router } from 'express';

@Component({
  selector: 'app-recomended-for-you',
  imports: [NgFor, NgIf],
  templateUrl: './recomended-for-you.component.html',
  styleUrl: './recomended-for-you.component.css'
})
export class RecomendedForYouComponent {
  constructor(private S_ProductList: ItemsListService, private router: Router,private S_Cart :ItemsInCartService) {

  }
  ngOnInit(): void {
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.ProductList = products;
    })
    // console.log("This is the result of the item list we are getting from the service--", this.ProductList);
  }
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

    this.S_Cart.AddProductQuantity(product)
    product.QuantityAddedToCart++;
    console.log("product quantity after the increament -----------",product.QuantityAddedToCart);
    this.S_ProductList.UpdateProduct(product);
  }
  DecreaseQuantity(product: any) {
    this.S_Cart.DecreaseProductQuantity(product);
    product.QuantityAddedToCart--;
    console.log("product quantity after the decreament -----------",product.QuantityAddedToCart);
    this.S_ProductList.UpdateProduct(product);
  }
  ProductDetails(p: any) {
    console.log("Navigating to product details page --", p);
    this.router.navigate(['ProductDetails', p.ProductId]);
  }
}
