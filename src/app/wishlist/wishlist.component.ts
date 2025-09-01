import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { ItemsInWishlistService } from '../items-in-wishlist.service';
import { ItemsInCartService } from '../items-in-cart.service';
import { SupportLineComponent } from '../support-line/support-line.component';
// import { Router } from 'express';

@Component({
  selector: 'app-wishlist',
  imports: [RouterLink, NgFor, NgIf, SupportLineComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  constructor(private S_ProductList: ItemsListService, private S_Wishlist: ItemsInWishlistService, private S_Cart: ItemsInCartService, private router: Router) {

  }
  ngOnInit(): void {
    this.S_ProductList.BindWIthLocalstorage();
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.WishlistProducts = products
    })
    this.S_Wishlist.CurrentItemsInWishlist.subscribe(num =>
      this.LengthOfWishlist = num
    )
    // this.LengthOfWishlist = this.WishlistProducts.length
    console.log("THIS IS THE PRODUCT LIST THAT ARE WISHLISTED --->", this.LengthOfWishlist)
  }
  WishlistProducts: ItemsClass[] = [];
  LengthOfWishlist: number = 0;
  RemoveFromWishlist(CurrentProduct: ItemsClass) {
    this.S_Wishlist.RemoveProductFromWishlist(CurrentProduct);
  }
  AddToCart(CurrentProduct: ItemsClass) {
    console.log("ADDING THE ITEM TO CART IS --", CurrentProduct);
    if (!CurrentProduct.IsAdded) {
      console.log("THIS ITEM IS NOT ADDED TO CART --------------")
      this.S_Cart.AddToCart(CurrentProduct);
    }
    else {
      console.log("THIS ITEM IS ALREADY ADDED TO CART --------------")
    }
    // this.router.navigate(['cart']);
  }
}
