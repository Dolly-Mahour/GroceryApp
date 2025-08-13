import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SupportLineComponent } from '../support-line/support-line.component';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink,SupportLineComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
