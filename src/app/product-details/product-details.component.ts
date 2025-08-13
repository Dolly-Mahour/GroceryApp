import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Init } from 'v8';
import { ItemsClass } from '../Classes/ItemClass';
import { ItemsListService } from '../items-list.service';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private S_Productlist: ItemsListService) {
    console.log('ActivatedRoute in constructor:', this.route);
  }
  ngOnInit(): void {
    this.IdOfProduct = Number(this.route.snapshot.paramMap.get('ProductId'))
    
    this.Product = this.S_Productlist.ProductsList.find(p => p.ProductId === this.IdOfProduct)!;
    console.log("PRODUCT IS -----", this.Product);
  }
  IdOfProduct!: number;
  Product: ItemsClass = {
    Name: '',
    Description: "",
    Price: 0,
    AwailableQuantity: 0,
    Img1: '',
    Img2: '',
    Img3: '',
    Img4: '',
    IsAdded: false,
    QuantityAddedToCart: 0,
    isWishlisted: false,
    CategoryId: 0,
    ProductId: 0
  };
}
