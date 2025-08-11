import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainContentPageComponent } from './main-content-page/main-content-page.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,FooterComponent,HomeComponent,RouterOutlet,MainContentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true, 
})
export class AppComponent {
  title = 'GroceryApp';
}
