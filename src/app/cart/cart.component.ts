import { Component, OnInit } from '@angular/core';
import { ItemsListService } from '../items-list.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private S_ItemsList:ItemsListService){

  }
  ngOnInit(): void {
    console.log("ITEMS IN CART THROUGH CART PAGE---",)
  }
}
