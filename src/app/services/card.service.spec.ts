import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { Card } from '../models/card/card.model';

describe('CardService', () => {
  let service: CardService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardService],
    });

    service = TestBed.inject(CardService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado a service (Must be created as a service)', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar uma lista de cards da requisição (GET) (Must fetch a list of cards from the request (GET))', () => {
    const mockCards: Card[] = [
      { 
        id: 1,
        title: "Árvore",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: "img1.png",
        type: "1"
      },
      { 
        id: 2,
        title: "Flor",
        description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "img2.png",
        type: "2"
      }
    ];

    service.getCards().subscribe(cards => {
      expect(cards.length).toBe(2);
      expect(cards).toEqual(mockCards);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCards);
  });
});
