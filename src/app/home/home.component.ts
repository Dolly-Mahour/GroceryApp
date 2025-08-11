import { Component, OnInit } from '@angular/core';
import { HomeBannerComponent } from '../home-banner/home-banner.component';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { CategoriesCrouselComponent } from '../categories-crousel/categories-crousel.component';
import { FlashSalesComponent } from '../flash-sales/flash-sales.component';
import { RecomendedForYouComponent } from '../recomended-for-you/recomended-for-you.component';
import { HotDealsComponent } from '../hot-deals/hot-deals.component';

@Component({
  selector: 'app-home',
  imports: [HomeBannerComponent,CategoriesCrouselComponent,FlashSalesComponent,RecomendedForYouComponent,HotDealsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
