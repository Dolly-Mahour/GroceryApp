import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemsCategoriesClass } from '../Classes/ItemsCategories';
import { ItemCategoriesService } from '../item-categories.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselService } from '../slick-carousel.service';
import { Router } from '@angular/router'
import { AddAfterCarouselComponent } from '../add-after-carousel/add-after-carousel.component';
@Component({
  selector: 'app-categories-crousel',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './categories-crousel.component.html',
  styleUrl: './categories-crousel.component.css'
})
export class CategoriesCrouselComponent implements OnInit {


  constructor(private S_ProductCategories: ItemCategoriesService, private S_carousel: SlickCarouselService, private router: Router) {

  }
  ngOnInit(): void {
    this.CategoriesList = this.S_ProductCategories.Categories;
    this.slideConfig = this.S_carousel.slideConfig;
  }
  slideConfig: any;
  CategoriesList: ItemsCategoriesClass[] = [];
  SearchViaParticularCategory(category: any) {
    this.router.navigate(['SearchViaCategory',category.CategoryId]);
  }
}
