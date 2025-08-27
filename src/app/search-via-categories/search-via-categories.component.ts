import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor, NgIf } from '@angular/common';
import { SupportLineComponent } from '../support-line/support-line.component';
import { ItemCategoriesService } from '../item-categories.service';
import { ItemsCategoriesClass } from '../Classes/ItemsCategories';
import { CategoriesCrouselComponent } from '../categories-crousel/categories-crousel.component';
import { SearchCategoriesTopbarComponent } from '../search-categories-topbar/search-categories-topbar.component';

@Component({
  selector: 'app-search-via-categories',
  imports: [NgFor, RouterLink, SupportLineComponent, CategoriesCrouselComponent,SearchCategoriesTopbarComponent,NgIf],
  templateUrl: './search-via-categories.component.html',
  styleUrl: './search-via-categories.component.css'
})
export class SearchViaCategoriesComponent implements OnInit {

  @Input() id?: string;
  constructor(private route: ActivatedRoute, private S_ProductList: ItemsListService, private S_CategoriesList: ItemCategoriesService) {

  }
  ngOnInit(): void {
    // this.IdOfTheCategory = Number(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.subscribe(params => {
      this.IdOfTheCategory = Number(params.get('id'));
      console.log("Now on product:", this.IdOfTheCategory);
      this.loadProduct();
    });
    if (this.id == "100") {
      this.IdForTopBar = Number(this.id)
      this.S_ProductList.ProductObservableList.subscribe(products => {
        this.ListOfProductWithCategory = products
      })
    }
  }
  loadProduct() {
    this.S_ProductList.ProductObservableList.subscribe(products => {
      this.ListOfProductWithCategory = products.filter(product => product.CategoryId === this.IdOfTheCategory);
    })
    this.CategoriesList = this.S_CategoriesList.Categories;
    this.WholeCategory = this.S_CategoriesList.Categories.find(category => category.CategoryId === this.IdOfTheCategory)
    this.CategoryName = this.WholeCategory?.CategoryName;
    console.log("FROM THE SEARCH CATEGORY PAGE --- ", this.IdOfTheCategory, "\nITEMS WITH THE CATEGORY---", this.ListOfProductWithCategory);
  }
  IdForTopBar:number = 0;
  IdOfTheCategoryStr!: string | null;
  IdOfTheCategory!: number;
  ListOfProductWithCategory!: ItemsClass[] | undefined;
  WholeCategory!: ItemsCategoriesClass | undefined;
  CategoriesList!: ItemsCategoriesClass[] | undefined;
  CategoryName!: string | undefined;
}
