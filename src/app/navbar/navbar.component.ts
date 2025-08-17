import { Component, OnInit } from '@angular/core';
import { Subscription, timer,Observable,Subject } from 'rxjs';
import { map, share ,takeWhile} from 'rxjs/operators';
import { CountdownModule } from 'ngx-countdown';
import { RouterLink } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';
@Component({
  selector: 'app-navbar',
  imports: [CountdownModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private S_Cart:ItemsInCartService){

  }
  ngOnInit(): void {
     this.S_Cart.CurrentItemsInCart.subscribe(num=>
      this.TotalNumberOFItemsInCart =num
    )
  }
  TotalNumberOFItemsInCart:number = 0;
}
