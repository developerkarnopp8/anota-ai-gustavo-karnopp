import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // Utilitário para buscar elementos no DOM
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardComponent,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = {
      id: 1,
      title: 'Título Teste',
      description: 'Descrição Teste',
      img: 'imagem.png',
      type: '1'
    };
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título corretamente', () => {
    const title = fixture.debugElement.query(By.css('.card__title')).nativeElement;
    expect(title.textContent).toContain('Título Teste');
  });

  it('deve exibir a descrição corretamente', () => {
    const description = fixture.debugElement.query(By.css('.card__description')).nativeElement;
    expect(description.textContent).toContain('Descrição Teste');
  });

  it('deve exibir a imagem corretamente', () => {
    const image = fixture.debugElement.query(By.css('.card__image')).nativeElement as HTMLImageElement;
    expect(image.src).toContain('imagem.png');
    expect(image.alt).toContain('Título Teste');
  });

  it('deve exibir o tipo correto com a cor correta', () => {
    const typeElement = fixture.debugElement.query(By.css('.card__type')).nativeElement as HTMLElement;
    expect(typeElement.textContent).toContain('Paisagem');
    expect(typeElement.style.background).toBe('rgb(10, 0, 245)');
  });

  it('deve emitir o evento de delete com o id correto ao clicar no botão', () => {
    spyOn(component.delete, 'emit');

    const closeButton = fixture.debugElement.query(By.css('.card__close')).nativeElement;
    closeButton.click();

    expect(component.delete.emit).toHaveBeenCalledOnceWith(1);
  });
});
