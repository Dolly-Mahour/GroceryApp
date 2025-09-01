import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Init } from 'v8';
import { ItemsClass } from '../Classes/ItemClass';
import { ItemsListService } from '../items-list.service';
import { CountdownModule } from 'ngx-countdown';
import { NgIf } from '@angular/common';
import { ItemsInCartService } from '../items-in-cart.service';
import { SuccessToastComponent } from '../success-toast/success-toast.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CountdownModule, NgIf, SuccessToastComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private S_ProductList: ItemsListService, private S_Cart: ItemsInCartService) {
    console.log('ActivatedRoute in constructor:', this.route);
  }
  ngOnInit(): void {
    this.S_ProductList.BindWIthLocalstorage()
    this.IdOfProduct = Number(this.route.snapshot.paramMap.get('ProductId'))
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.Product = products.find(p => p.ProductId === this.IdOfProduct)!;
    })
    // this.S_ProductList.ProductObservableList.subscribe(products => {
    //   this.Product = products.find(item => item.ProductId == this.IdOfProduct);
    // });
    console.log("PRODUCT IS -----", this.Product);
  }
  IdOfProduct!: number;
  Product: ItemsClass = {
    Name: '',
    Description: "",
    Price: 0,
    AwailableQuantity: 0,
    Img1: '',
    Img2: '',
    Img3: '',
    Img4: '',
    IsAdded: false,
    QuantityAddedToCart: 0,
    isWishlisted: false,
    CategoryId: 0,
    ProductId: 0
  };
  AddProductToCart(Product: ItemsClass) {
    console.log("ADDING THE ITEM TO CART IS --", Product);
    if (!Product.IsAdded) {
      console.log("THIS ITEM IS NOT ADDED TO CART --------------")
      this.S_Cart.AddToCart(Product);
    }
    else {
      console.log("THIS ITEM IS ALREADY ADDED TO CART --------------")
    }
    const toastEl = document.getElementById('SucessToast');
    if (toastEl) {
      console.log("CALLING THE TOAST TO OPEN BUTTON ---")
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
  IncreaseQuantity(product: any) {
    this.S_Cart.AddProductQuantity(product)
    product.QuantityAddedToCart++;
    this.S_ProductList.UpdateProduct(product);
  }
  DecreaseQuantity(product: any) {
    this.S_Cart.DecreaseProductQuantity(product);
    product.QuantityAddedToCart--;
    this.S_ProductList.UpdateProduct(product);
  }
}
