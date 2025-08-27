import { Component, OnInit } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { RouterLink , Router } from '@angular/router';
import { ItemsInCartService } from '../items-in-cart.service';
import { LogoComponent } from '../logo/logo.component';
import { ItemsInWishlistService } from '../items-in-wishlist.service';
import { HomeDropdownComponent } from '../home-dropdown/home-dropdown.component';
import { ShopDropdownComponent } from '../shop-dropdown/shop-dropdown.component';
import { PagesDropdownComponent } from '../pages-dropdown/pages-dropdown.component';
import { VendersDropdownComponent } from '../venders-dropdown/venders-dropdown.component';
import { BlogDropdownComponent } from '../blog-dropdown/blog-dropdown.component';
import { ItemsCategoriesClass } from '../Classes/ItemsCategories';
import { ItemCategoriesService } from '../item-categories.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CountdownModule, RouterLink, LogoComponent,HomeDropdownComponent,ShopDropdownComponent,PagesDropdownComponent,VendersDropdownComponent,BlogDropdownComponent,NgFor,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private S_Cart: ItemsInCartService, private S_Wislist: ItemsInWishlistService,private S_Categories:ItemCategoriesService,private router:Router) {

  }
  ngOnInit(): void {
    this.S_Cart.CurrentItemsInCart.subscribe(num =>
      this.TotalNumberOFItemsInCart = num
    )
    this.S_Wislist.CurrentItemsInWishlist.subscribe(num =>
      this.TotalNumberOFItemsInWishlist = num
    )
    this.Categorieslist = this.S_Categories.Categories;
    this.Categorieslist.splice(8,1)
  }
  TotalNumberOFItemsInCart: number = 0;
  TotalNumberOFItemsInWishlist: number = 0;
  Categorieslist:ItemsCategoriesClass[]=[];
  SearchingWithCategory(category:ItemsCategoriesClass){
     console.log("THIS IS THE CATEGORY CLICKED--", category.CategoryId);
    this.router.navigate(['SearchViaCategory',category.CategoryId]);
  }
}
