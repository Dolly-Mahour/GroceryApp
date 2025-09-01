import { Component } from '@angular/core';
import { SupportLineComponent } from '../support-line/support-line.component';
import { NameImgClass } from '../Classes/CommonClass';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendor-page',
  imports: [SupportLineComponent, NgFor, NgIf, RouterLink],
  templateUrl: './vendor-page.component.html',
  styleUrl: './vendor-page.component.css'
})
export class VendorPageComponent {
  Vendorslist: NameImgClass[] = [
    {
      Name: 'Organic Market',
      Img: 'images/VImg1.png',
      BgColor: '#f4f6e6'
    },
    {
      Name: 'Safeway',
      Img: 'images/VImg2.png',
      BgColor: '#e6f6f6'
    },
    {
      Name: 'Food Max',
      Img: 'images/VImg3.png',
      BgColor: '#f6e6f6'
    },
    {
      Name: 'HRmart',
      Img: 'images/VImg4.png',
      BgColor: '#f8eae4'
    },
    {
      Name: 'Lucky Supermarket',
      Img: 'images/VImg5.png',
      BgColor: '#f8eae4'
    },
    {
      Name: 'Arico Farmer',
      Img: 'images/VImg6.png',
      BgColor: '#dee6f3'
    },
    {
      Name: 'Farmer Market',
      Img: 'images/VImg1.png',
      BgColor: '#daf2db'
    },
    {
      Name: 'Foodsco',
      Img: 'images/VImg2.png',
      BgColor: '#ebf1da'
    },
    {
      Name: 'Organic Market',
      Img: 'images/VImg3.png',
      BgColor: '#f4f6e6'
    },
    {
      Name: 'Safeway',
      Img: 'images/VImg4.png',
      BgColor: '#e6f6f6'
    },
    {
      Name: 'Food Max',
      Img: 'images/VImg5.png',
      BgColor: '#f6e6f6'
    },
    {
      Name: 'Vishal Mart',
      Img: 'images/VImg6.png',
      BgColor: '#f8eae4'
    },
  ]
}
