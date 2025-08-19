import { Component, OnInit } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsInCartService } from '../items-in-cart.service';
import { Router, RouterLink } from '@angular/router';
import { SupportLineComponent } from '../support-line/support-line.component';
import { NgFor } from '@angular/common';
import { ItemsClass } from '../Classes/ItemClass';
// import { Router } from 'express';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, SupportLineComponent, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private S_ItemsList: ItemsListService, private S_Cart: ItemsInCartService, private router: Router) {

  }
  ngOnInit(): void {
    console.log("ITEMS IN CART THROUGH CART PAGE---",)

    this.S_Cart.CartItems.subscribe(items => {
      this.ItemsInCart = items;
    });
    for(let i=0;i<this.ItemsInCart.length;i++ ){
      this.SubtotalOfCart = this.ItemsInCart[i].Price + this.SubtotalOfCart;
    }
    // console.log("ITEMS IN CART----------- FROM LOCALSTORAGE ", localStorage.getItem('ItemsAddedAtCart'));
    // console.log("Items in the list of the itemslist in the service -- ", this.S_Cart.ItemListAtCartInService);
  }
  ItemsInCart: ItemsClass[] = [];
  SubtotalOfCart:number=0;
  IncreaseQuantity(p: any) {
    console.log("CALLING THE ADD QUANTITY FUNCTION-----")
    this.S_Cart.AddProductQuantity(p);
    this.router.navigate(['cart']);
  }
  DecreaseQuantity(p: any) {
    this.S_Cart.DecreaseProductQuantity(p);
    this.router.navigate(['cart']);
  }
  RemoveItemFromCart(p:any){
    console.log("Removing Item from the cart------");
    this.S_Cart.RemoveProductFromCart(p);
  }
}
