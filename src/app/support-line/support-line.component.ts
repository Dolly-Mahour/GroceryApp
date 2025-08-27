import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-support-line',
  imports: [],
  templateUrl: './support-line.component.html',
  styleUrl: './support-line.component.css'
})
export class SupportLineComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
