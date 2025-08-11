import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-slide',
  imports: [],
  templateUrl: './banner-slide.component.html',
  styleUrl: './banner-slide.component.css'
})
export class BannerSlideComponent {
  constructor(private viewportScroller: ViewportScroller){

  }
  scrollDown(): void {
    this.viewportScroller.scrollToPosition([0, 800]); // Scrolls to x=1000, y=0
  }
}
