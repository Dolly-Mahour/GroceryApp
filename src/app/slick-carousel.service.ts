import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlickCarouselService {

  constructor() { }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    infinite: true,
    variableWidth: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false
  };
}
