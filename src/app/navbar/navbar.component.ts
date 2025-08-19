import { Component, OnInit } from '@angular/core';
import { Subscription, timer, Observable, Subject } from 'rxjs';
import { map, share, takeWhile } from 'rxjs/operators';
import { CountdownModule } from 'ngx-countdown';
import { RouterLink } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';
import { LogoComponent } from '../logo/logo.component';
import { ItemsInWishlistService } from '../items-in-wishlist.service';
@Component({
  selector: 'app-navbar',
  imports: [CountdownModule, RouterLink, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private S_Cart: ItemsInCartService, private S_Wislist: ItemsInWishlistService) {

  }
  ngOnInit(): void {
    this.S_Cart.CurrentItemsInCart.subscribe(num =>
      this.TotalNumberOFItemsInCart = num
    )
    this.S_Wislist.CurrentItemsInWishlist.subscribe(num =>
      this.TotalNumberOFItemsInWishlist = num
    )

  }
  TotalNumberOFItemsInCart: number = 0;
  TotalNumberOFItemsInWishlist: number = 0;
}
