import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-add-after-carousel',
  imports: [],
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
}
