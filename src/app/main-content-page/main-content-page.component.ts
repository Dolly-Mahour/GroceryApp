import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-content-page',
  imports: [RouterOutlet],
  templateUrl: './main-content-page.component.html',
  styleUrl: './main-content-page.component.css'
})
export class MainContentPageComponent {

}
