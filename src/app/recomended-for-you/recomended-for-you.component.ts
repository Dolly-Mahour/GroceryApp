import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';
import { ItemsInWishlistService } from '../items-in-wishlist.service';
// import { Router } from 'express';

@Component({
  selector: 'app-recomended-for-you',
  imports: [NgFor, NgIf],
  templateUrl: './recomended-for-you.component.html',
  styleUrl: './recomended-for-you.component.css'
})
export class RecomendedForYouComponent {
  constructor(private S_ProductList: ItemsListService, private router: Router, private S_Cart: ItemsInCartService,private S_Wishlist :ItemsInWishlistService) {

  }
  ngOnInit(): void {
    this.S_ProductList.GetTheListOfProducts()
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.ProductList = products;
    })
    this.HalfProductList = this.ProductList.filter(item => item.ProductId <= 12);
  }
  ProductList: ItemsClass[] = [];
  HalfProductList: ItemsClass[] = [];
  @ViewChild('HeartFilled') HeartFilled!: ElementRef;
  @ViewChild('HeartEmpty') HeartEmpty!: ElementRef;
  ProductsIntoWishlistNumber:number = 0;
  
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
    console.log("product quantity after the increament -----------", product.QuantityAddedToCart);
    this.S_ProductList.UpdateProduct(product);
  }
  DecreaseQuantity(product: any) {
    this.S_Cart.DecreaseProductQuantity(product);
    product.QuantityAddedToCart--;
    console.log("product quantity after the decreament -----------", product.QuantityAddedToCart);
    this.S_ProductList.UpdateProduct(product);
  }
  ProductDetails(p: any) {
    console.log("Navigating to product details page --", p);
    this.router.navigate(['ProductDetails', p.ProductId]);
  }
  ProductIntoWishlist(p: ItemsClass) {
    console.log("calling the wishlist funciton ------")
    if (!p.isWishlisted) {
      // console.log("product--p--",p)
      this.S_Wishlist.AddProductToWishlist(p)
    }
    else{
      this.S_Wishlist.RemoveProductFromWishlist(p);
    }
    console.log("LOCALSTORAGE WISHLIST IN RECOMENDED-",JSON.parse(localStorage.getItem('ItemsAddedAtWishlist') || '[]'))
  }
}
