import { Component } from '@angular/core';
import { BannerSlideComponent } from '../banner-slide/banner-slide.component';

@Component({
  selector: 'app-home-banner',
  imports: [BannerSlideComponent],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css'
})
export class HomeBannerComponent {

}
