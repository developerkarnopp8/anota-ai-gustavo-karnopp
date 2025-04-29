import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../models/card/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  close: string = 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/close.svg'
  @Input() card!: Card;
  @Output() delete = new EventEmitter<number>();

  get type(): {type: string, color: string} {
    switch (this.card.type) {
      case '1': 
        return { type: 'Paisagem', color: '#0a00f5' };
      case '2': 
        return { type: 'Flor', color: '#f50057' };
      case '3': 
        return { type: 'Pizza', color: '#bfb910' };
      default: 
        return { type: 'Desconhecido', color: '#db2222' };
    }
  }

}
