import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Vendors } from '../Classes/VendorsClass';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-after-carousel',
  imports: [CommonModule],
  templateUrl: './add-after-carousel.component.html',
  styleUrl: './add-after-carousel.component.css'
})
export class AddAfterCarouselComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  ListOfAdds: Vendors[] = [
    {
      Name: 'Everyday Fresh Meat',
      Img: 'url("images/B1.png")',
      BgColor: ''
    },
    {
      Name: 'Everyday Fresh Vegetables',
      Img: 'url("images/B2.png")',
      BgColor: ''
    },
    {
      Name: 'Everyday Fresh Milk',
      Img: 'url("images/B3.png")',
      BgColor: ''
    },
    {
      Name: 'Everyday Fresh Fruit',
      Img: 'url("images/B4.png")',
      BgColor: ''
    },
  ]
}
