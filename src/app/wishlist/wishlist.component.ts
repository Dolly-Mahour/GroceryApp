import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { ItemsInWishlistService } from '../items-in-wishlist.service';
import { ItemsInCartService } from '../items-in-cart.service';
// import { Router } from 'express';

@Component({
  selector: 'app-wishlist',
  imports: [RouterLink,NgFor,NgIf],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  constructor(private S_ProductList :ItemsListService,private S_Wishlist:ItemsInWishlistService,private S_Cart:ItemsInCartService,private router:Router) {

  }
  ngOnInit(): void {
    // this.IdOfTheCategory = Number(this.route.snapshot.paramMap.get('id'))
    this.S_ProductList.GetProductFromCart();
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.ListOfProductWithCategory = products
    })
    // this.ListOfProductWithCategory=this.S_Wishlist.SyncProductlistWithWishlistStorage()
    console.log("THIS IS THE PRODUCT LIST THAT ARE WISHLISTED --->",this.ListOfProductWithCategory)
  }
    ListOfProductWithCategory!:ItemsClass[]|undefined;
  RemoveFromWishlist(CurrentProduct:ItemsClass){
    this.S_Wishlist.RemoveProductFromWishlist(CurrentProduct);
  }
  AddToCart(CurrentProduct:ItemsClass){
    console.log("ADDING THE ITEM TO CART IS --", CurrentProduct);
    if (!CurrentProduct.IsAdded) {
      console.log("THIS ITEM IS NOT ADDED TO CART --------------")
      this.S_Cart.AddToCart(CurrentProduct);
    }
    else {
      console.log("THIS ITEM IS ALREADY ADDED TO CART --------------")
    }
    this.router.navigate(['cart']);
  }
}
