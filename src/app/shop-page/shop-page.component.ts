import { Component } from '@angular/core';
import { SearchViaCategoriesComponent } from '../search-via-categories/search-via-categories.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupportLineComponent } from '../support-line/support-line.component';

@Component({
  selector: 'app-shop-page',
  imports: [SearchViaCategoriesComponent,RouterLink,CommonModule,SupportLineComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

}
