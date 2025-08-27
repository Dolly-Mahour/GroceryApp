import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SupportLineComponent } from '../support-line/support-line.component';

@Component({
  selector: 'app-blog-page',
  imports: [RouterLink,SupportLineComponent,SupportLineComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

}
