import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-banner-slide',
  imports: [],
  templateUrl: './banner-slide.component.html',
  styleUrl: './banner-slide.component.css'
})
export class BannerSlideComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {

  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  scrollDown(): void {
    this.viewportScroller.scrollToPosition([0, 800]); // Scrolls to x=1000, y=0
  }
}
