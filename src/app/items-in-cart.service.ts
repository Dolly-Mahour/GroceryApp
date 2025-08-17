import { Injectable } from '@angular/core';
import { ItemsClass } from './Classes/ItemClass';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemsListService } from './items-list.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsInCartService {
  ItemListAtCartInService: ItemsClass[] = [];


  // WHEN THE SERVICE IS INITIALISING INTO ANY OF THE COMPONENT IT IS JUST CHANGE AND UPDATING THE PROPERTIES VALUE AT THE TIME OF THE IMITIALISATION OF THE SERVICE IT UpdateS THE VALUE THAT ALREADY EXISTS IN THE CART 
  constructor(private S_ItemsList: ItemsListService) {
    const LocalStorageCart = JSON.parse(localStorage.getItem('ItemsAddedAtCart') || '[]');
    this._CartItems.next(LocalStorageCart);
    this._NumberOfItemsInCart.next(LocalStorageCart.length);
  }



  // OBSERVABLE PROPERTY FOR ASYNCRONOUS DATA UPDATION IN CARRT ITEMS ------------------------------------
  private _CartItems = new BehaviorSubject<ItemsClass[]>([]);
  CartItems = this._CartItems.asObservable();


  // PROPERTY FOR AYNCRONOUS UPDATION IN NUMBER OF ITEMS PRESENT IN THE CART-------------------------------
  private _NumberOfItemsInCart = new BehaviorSubject<number>(0);
  CurrentItemsInCart: Observable<number> = this._NumberOfItemsInCart.asObservable();



  // RETURNING THE LIST OF ITEM IN THE LOCAL STORAGE ----------------------------------------------------------
  GetCartFromStorage(): ItemsClass[] {
    try {
      const LisOfItemsInLocalStorageCart = JSON.parse(localStorage.getItem('ItemsAddedAtCart') || '[]');
      this._NumberOfItemsInCart.next(LisOfItemsInLocalStorageCart.length);
      return LisOfItemsInLocalStorageCart;
    } catch (e) {
      console.error('there is a error to getting the data from the localstorage ------', e);
      return [];
    }
  }

  // UPDATING THE CART THAT PASSED AS THE PARAMETER IN THE FUNCTION ----------------------------------------------------------
  UpdateCart(cart: ItemsClass[]) {
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(cart));
    this._CartItems.next(cart.slice());
    this._NumberOfItemsInCart.next(cart.length);
  }

  // ADDING A PRODUCT IN PARAMETER TO THE CART  AND THEN UPDATING THE LOCAL STORAGE ---------------------------------------------
  AddToCart(CurrentProduct: ItemsClass) {
    CurrentProduct.IsAdded = true;
    CurrentProduct.QuantityAddedToCart = CurrentProduct.QuantityAddedToCart + 1;
    // this.S_ItemsList.ProductObservableList.subscribe(products => {
    //   console.log('Got Updated products:', products);
    // });
    let cart = this.GetCartFromStorage();
    cart.push(CurrentProduct);
    this.UpdateCart(cart);
    // this.CurrentItemsInCart.next(this._NumberOfItemsInCart++;)
  }

  // ADDING THE PRODUCT QUANTITY--------------------------------------------------
  AddProductQuantity(CurrentProduct: ItemsClass) {
    let cart = this.GetCartFromStorage();
    let index = cart.findIndex(x => x.ProductId === CurrentProduct.ProductId);
    if (index != -1) {
      cart[index].QuantityAddedToCart++;
    }
    this.UpdateCart(cart);
  }
  // DECRESING THE QUANTITY OF THE PRODUCT-------------------------------------------------------------------------
  DecreaseProductQuantity(CurrentProduct: ItemsClass) {
    let cart = this.GetCartFromStorage();
    let index = cart.findIndex(x => x.ProductId === CurrentProduct.ProductId);
    if (index != -1) {
      cart[index].QuantityAddedToCart--;
      if (cart[index].QuantityAddedToCart <= 0) {
        cart[index].IsAdded = false;
        cart.splice(index, 1);
      }
    }
    this.UpdateCart(cart);
    CurrentProduct.QuantityAddedToCart = CurrentProduct.QuantityAddedToCart--;
    this.S_ItemsList.UpdateProduct(CurrentProduct);
  }
}
