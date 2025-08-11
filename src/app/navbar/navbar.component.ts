import { Component } from '@angular/core';
import { Subscription, timer,Observable,Subject } from 'rxjs';
import { map, share ,takeWhile} from 'rxjs/operators';
import { CountdownModule } from 'ngx-countdown';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CountdownModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
