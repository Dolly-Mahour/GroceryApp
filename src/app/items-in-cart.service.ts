import { Injectable } from '@angular/core';
import { ItemsClass } from './Classes/ItemClass';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemsListService } from './items-list.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsInCartService {

  constructor(private S_ItemsList: ItemsListService) { }

  ItemListAtCartInService: ItemsClass[] = [];
  TotalNumberOfItemsInCart: number = 0;


  UpdateItemsInCart(CartList: ItemsClass[]) {
    this.ItemListAtCartInService = CartList;
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(CartList));
  }
  GetNumberOfItems(count: number) {
    this.TotalNumberOfItemsInCart = count
  }

  // synchronous function to track the live changes in the cart  ------------------
  private _NumberOfItemsInCart = new BehaviorSubject<any>(null);
  currentData$: Observable<any> = this._NumberOfItemsInCart.asObservable();

  sendData(data: any) {
    this._NumberOfItemsInCart.next(data);
  }

  GetCartFromStorage(): ItemsClass[] {
    const storedCart = localStorage.getItem('ItemsAddedAtCart');
    try {
      const parsed = JSON.parse(storedCart || '[]');
      this.TotalNumberOfItemsInCart = parsed.length;
      return parsed;
    } catch (e) {
      console.error('Error parsing cart from localStorage:', e);
      return [];
    }
  }
  NumberOfItemsInTheCart :number =0;
  AddToCart(p: any) {
    this.ItemListAtCartInService.splice(this.NumberOfItemsInTheCart, 0, p);
    localStorage.setItem('ItemsAddedAtCart', JSON.stringify(this.ItemListAtCartInService))

  }
}
