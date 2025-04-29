import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-card-list',
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  constructor(
    private cardService : CardService
  ){}

  searchTerm = '';

  // get filteredCards() {
  //   return this.cards.filter(card =>
  //     card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //     card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }
  

  // removeCard(id: number) {
  //   this.cards = this.cards.filter(card => card.id !== id);
  // }

}
