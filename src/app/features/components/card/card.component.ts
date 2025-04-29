import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../models/card/card.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  close: string = 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/close.svg'
  @Input() card!: Card;
  @Output() delete = new EventEmitter<number>();

  get typeName(): string {
    switch (this.card.type) {
      case 1: return 'Paisagem';
      case 2: return 'Flor';
      case 3: return 'Pizza';
      default: return 'Desconhecido';
    }
  }

}
