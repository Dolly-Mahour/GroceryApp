import { Injectable } from '@angular/core';
import { ItemsClass } from './Classes/ItemClass';
import { ItemsListService } from './items-list.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsInWishlistService {

  ItemListAtWishlistInService: ItemsClass[] = [];


  // WHEN THE SERVICE IS INITIALISING INTO ANY OF THE COMPONENT IT IS JUST CHANGE AND UPDATING THE PROPERTIES VALUE AT THE TIME OF THE IMITIALISATION OF THE SERVICE IT UpdateS THE VALUE THAT ALREADY EXISTS IN THE Wishlist 
  constructor(private S_ItemsList: ItemsListService) {
    const LocalStorageWishlist = JSON.parse(localStorage.getItem('ItemsAddedAtWishlist') || '[]');
    this._WishlistItems.next(LocalStorageWishlist);
    this._NumberOfItemsInWishlist.next(LocalStorageWishlist.length);
  }

  // OBSERVABLE PROPERTY FOR ASYNCRONOUS DATA UPDATION IN CARRT ITEMS ------------------------------------
  private _WishlistItems = new BehaviorSubject<ItemsClass[]>([]);
  WishlistItems = this._WishlistItems.asObservable();

  // PROPERTY FOR AYNCRONOUS UPDATION IN NUMBER OF ITEMS PRESENT IN THE Wishlist-------------------------------
  private _NumberOfItemsInWishlist = new BehaviorSubject<number>(0);
  CurrentItemsInWishlist: Observable<number> = this._NumberOfItemsInWishlist.asObservable();

  // RETURNING THE LIST OF ITEM IN THE LOCAL STORAGE ----------------------------------------------------------
  GetWishlistFromStorage(): ItemsClass[] {
    try {
      const LisOfItemsInLocalStorageWishlist = JSON.parse(localStorage.getItem('ItemsAddedAtWishlist') || '[]');
      this._NumberOfItemsInWishlist.next(LisOfItemsInLocalStorageWishlist.length);
      return LisOfItemsInLocalStorageWishlist;
    } catch (e) {
      console.error('there is a error to getting the data from the localstorage ------', e);
      return [];
    }
  }

  // UPDATING THE Wishlist THAT PASSED AS THE PARAMETER IN THE FUNCTION ----------------------------------------------------------
  UpdateWishlist(Wishlist: ItemsClass[]) {
    localStorage.setItem('ItemsAddedAtWishlist', JSON.stringify(Wishlist));
    this._WishlistItems.next([...Wishlist]);
    this._NumberOfItemsInWishlist.next(Wishlist.length);
  }

  // ADDING A PRODUCT IN PARAMETER TO THE Wishlist  AND THEN UPDATING THE LOCAL STORAGE ---------------------------------------------
  AddToWishlist(CurrentProduct: ItemsClass) {
    CurrentProduct.isWishlisted = true;
    let Wishlist = this.GetWishlistFromStorage();
    Wishlist.push(CurrentProduct);
    this.UpdateWishlist(Wishlist);
  }

  // ADDING THE PRODUCT QUANTITY--------------------------------------------------
  AddProductToWishlist(CurrentProduct: ItemsClass) {
    CurrentProduct.IsAdded = true;
    CurrentProduct.isWishlisted = true;
    let cart = this.GetWishlistFromStorage();
    cart.push(CurrentProduct);
    this.UpdateWishlist(cart);
    // this.CurrentItemsInWishlist.next(this.num++;)
  }

  RemoveProductFromWishlist(CurrentProduct: ItemsClass) {
    let Wishlist = this.GetWishlistFromStorage();
    let index = Wishlist.findIndex(x => x.ProductId === CurrentProduct.ProductId);
    if (index != -1) {
      Wishlist[index].isWishlisted = false;
      Wishlist.splice(index, 1);

    }
    this.UpdateWishlist(Wishlist);
    CurrentProduct.isWishlisted = false;
    this.S_ItemsList.UpdateProduct(CurrentProduct);
  }

}
