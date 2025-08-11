import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemsCategoriesClass } from '../Classes/ItemsCategories';
import { ItemCategoriesService } from '../item-categories.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
// import { ItemsListService } from '../items-list.service';
@Component({
  selector: 'app-categories-crousel',
  imports: [CommonModule,SlickCarouselModule],
  templateUrl: './categories-crousel.component.html',
  styleUrl: './categories-crousel.component.css'
})
export class CategoriesCrouselComponent implements OnInit {

  
  constructor(private S_ProductCategories: ItemCategoriesService, private S_carousel: SlickCarouselService) {
  
    }
    ngOnInit(): void {
      this.CategoriesList = this.S_ProductCategories.Categories;
      this.slideConfig = this.S_carousel.slideConfig;
    }
    slideConfig: any;
    CategoriesList: ItemsCategoriesClass[] = [];
}
