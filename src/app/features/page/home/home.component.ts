import { Component } from '@angular/core';
import { CardListComponent } from "../../components/card-list/card-list.component";

@Component({
  selector: 'app-home',
  imports: [CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   icon : string = 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/favicon.png'
}
