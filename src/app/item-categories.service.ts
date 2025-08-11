import { Injectable } from '@angular/core';
import { ItemsCategoriesClass } from './Classes/ItemsCategories';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoriesService {

  constructor() { }

  Categories: ItemsCategoriesClass[] = [
    {
      'CategoryName': "Dairy & Egg",
      'CategoryId': 1,
      'CategoryImg': "images/Category1Img.png",
      'BgColor': "#e9e3fb",
    },
    {
      'CategoryName': "Snacks",
      'CategoryId': 2,
      'CategoryImg': "images/Category2Img.png",
      'BgColor': "#ecf8f2",
    },
    {
      'CategoryName': "Frozen Foods",
      'CategoryId': 3,
      'CategoryImg': "images/Category3Img.png",
      'BgColor': "#f8f5e5",
    },
    {
      'CategoryName': "Vegetables",
      'CategoryId': 4,
      'CategoryImg': "images/Category4Img.png",
      'BgColor': "#f5faee",
    },
    {
      'CategoryName': "Fish & Meats",
      'CategoryId': 5,
      'CategoryImg': "images/Category5Img.png",
      'BgColor': "#dddddd",
    },
    {
      'CategoryName': "Deserts",
      'CategoryId': 6,
      'CategoryImg': "images/Category6Img.png",
      'BgColor': "#fceded",
    },
    {
      'CategoryName': "Drinking & Juice",
      'CategoryId': 7,
      'CategoryImg': "images/Category7Img.png",
      'BgColor': "#f6ebf3",
    },
    {
      'CategoryName': "Animals Food",
      'CategoryId': 8,
      'CategoryImg': "images/Category8Img.png",
      'BgColor': "#fcf2e7",
    },
    {
      'CategoryName': "Fresh Fruits",
      'CategoryId': 9,
      'CategoryImg': "images/Category9Img.png",
      'BgColor': "#f6fce7",
    },
    {
      'CategoryName': "Yummy Candy",
      'CategoryId': 10,
      'CategoryImg': "images/Category10Img.png",
      'BgColor': "#f5fbe3",
    },
  ]


}
