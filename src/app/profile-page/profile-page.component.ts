import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SupportLineComponent } from '../support-line/support-line.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-profile-page',
  imports: [RouterLink, SupportLineComponent, LogoComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
