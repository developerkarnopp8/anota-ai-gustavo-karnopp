import { Component, computed, OnInit, signal } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/card/card.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent implements OnInit {

  cards = signal<Card[]>([]);
  searchTerm = signal('');

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.getCards().subscribe(data => {
      console.log(data, 'data');
      
      this.cards.set(data);
    });
  }

  removeCard(id: number) {
    const newCart = this.cards().filter(card => card.id !== id);
    this.cards.set(newCart);
  }

  filteredCards = computed(() => {
    const term = this.searchTerm().toLowerCase();

    if (!term) {
      return this.cards();
    }
    
    return this.cards().filter(card =>
      card.title.toLowerCase().includes(term) ||
      card.description.toLowerCase().includes(term)
    );
  });

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  onSearchClick() {
    console.log('Busca acionada manualmente:', this.searchTerm());
  }

  clearSearch() {
    this.searchTerm.set('');
  }
}
