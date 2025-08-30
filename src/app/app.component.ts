import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainContentPageComponent } from './main-content-page/main-content-page.component';
// import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, MainContentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'GroceryApp';

}
