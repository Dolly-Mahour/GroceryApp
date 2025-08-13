import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { ItemsListService } from '../items-list.service';
import { ItemsClass } from '../Classes/ItemClass';
import { NgFor } from '@angular/common';
import { support } from 'jquery';
import { SupportLineComponent } from '../support-line/support-line.component';
import { ItemCategoriesService } from '../item-categories.service';
import { ItemsCategoriesClass } from '../Classes/ItemsCategories';

@Component({
  selector: 'app-search-via-categories',
  imports: [NgFor,RouterLink,SupportLineComponent],
  templateUrl: './search-via-categories.component.html',
  styleUrl: './search-via-categories.component.css'
})
export class SearchViaCategoriesComponent implements OnInit {
  constructor(private route:ActivatedRoute,private S_ProductList:ItemsListService,private S_CategoriesList :ItemCategoriesService){

  }
  ngOnInit(): void {
    this.IdOfTheCategory = Number(this.route.snapshot.paramMap.get('id'))
    this.ListOfProductWithCategory = this.S_ProductList.ProductsList.filter(product => product.CategoryId === this.IdOfTheCategory);
    this.WholeCategory = this.S_CategoriesList.Categories.find(category => category.CategoryId === this.IdOfTheCategory)
    this.CategoryName = this.WholeCategory?.CategoryName;
    console.log("FROM THE SEARCH CATEGORY PAGE --- ",this.IdOfTheCategory,"\nITEMS WITH THE CATEGORY---",this.ListOfProductWithCategory);
  }
  IdOfTheCategoryStr!:string|null;
  IdOfTheCategory!:number;
  ListOfProductWithCategory!:ItemsClass[]|undefined;
  WholeCategory!: ItemsCategoriesClass|undefined;
  CategoryName!:string|undefined;
}
