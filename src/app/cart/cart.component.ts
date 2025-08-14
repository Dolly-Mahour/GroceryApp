import { Component, OnInit } from '@angular/core';
import { ItemsListService } from '../items-list.service';
import { ItemsInCartService } from '../items-in-cart.service';
import { RouterLink } from '@angular/router';
import { SupportLineComponent } from '../support-line/support-line.component';

@Component({
  selector: 'app-cart',
  imports: [RouterLink,SupportLineComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private S_ItemsList:ItemsListService, private S_Cart :ItemsInCartService){

  }
  ngOnInit(): void {
    console.log("ITEMS IN CART THROUGH CART PAGE---",)
    // localStorage.setItem('ItemsAddedAtCart','');
    // this.S_Cart.ItemListAtCartInService = [];
    console.log("ITEMS IN CART----------- FROM LOCALSTORAGE ", localStorage.getItem('ItemsAddedAtCart'));
    console.log("Items in the list of the itemslist in the service -- ", this.S_Cart.ItemListAtCartInService);
  }
}
