import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let httpMock: HttpTestingController;

  const mockCards = [
    { 
      id: 1, 
      title: 'Pizza', 
      description: 'Mussarela', 
      img: '', 
      type: '3' 
    },
    { 
      id: 2, 
      title: 'Flor', 
      description: 'Rosa', 
      img: '', 
      type: '2' 
    },
    { 
      id: 3, 
      title: 'Paisagem', 
      description: 'Montanha', 
      img: '', 
      type: '1' 
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();

    const req = httpMock.expectOne('https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json');
    req.flush(mockCards);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve criar o componente (Must create the component)', () => {
    expect(component).toBeTruthy();
  });

  it('deve filtrar corretamente os cards por título (Should correctly filter cards by title)', () => {
    component.searchTerm.set('piz');
    fixture.detectChanges();

    const cards = component.filteredCards();
    expect(cards.length).toBe(1);
    expect(cards[0].title).toBe('Pizza');
  });

  it('deve limpar o campo de busca ao clicar em "Limpar" (You must clear the search field when you click "Clear")', () => {
    component.searchTerm.set('pizza');
    fixture.detectChanges();

    const clearBtn = fixture.debugElement.query(By.css('.card-list__button:last-of-type')).nativeElement;
    clearBtn.click();

    fixture.detectChanges();
    expect(component.searchTerm()).toBe('');
  });

  it('deve remover um card ao receber evento delete (Must remove a card when receiving delete event)', () => {
    expect(component.cards().length).toBe(3);

    component.removeCard(2);
    fixture.detectChanges();

    expect(component.cards().length).toBe(2);
    expect(component.cards().find(c => c.id === 2)).toBeUndefined();
  });

  it('deve renderizar os cards no DOM após carregar (Should render cards in the DOM after loading)', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('app-card'));
    expect(cardElements.length).toBe(3);
  });
});
