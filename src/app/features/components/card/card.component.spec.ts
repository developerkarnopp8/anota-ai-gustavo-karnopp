import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
      title: "Árvore",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "imagem.png",
      type: "1"
    };
    fixture.detectChanges();
  });

  it('deve criar o componente (Must create the component)', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título corretamente (Should display the title correctly)', () => {
    const title = fixture.debugElement.query(By.css('.card__title')).nativeElement;
    expect(title.textContent).toContain('Árvore');
  });

  it('deve exibir a descrição corretamente (Should display the description correctly)', () => {
    const description = fixture.debugElement.query(By.css('.card__description')).nativeElement;
    expect(description.textContent).toContain('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  });

  it('deve exibir a imagem corretamente (Should display the image correctly)', () => {
    const image = fixture.debugElement.query(By.css('.card__image')).nativeElement as HTMLImageElement;
    expect(image.src).toContain('imagem.png');
    expect(image.alt).toContain('Árvore');
  });

  it('deve exibir o tipo correto com a cor correta (Should display the correct type with the correct color)', () => {
    const typeElement = fixture.debugElement.query(By.css('.card__type')).nativeElement as HTMLElement;
    expect(typeElement.textContent).toContain('Paisagem');
    expect(typeElement.style.background).toBe('rgb(10, 0, 245)');
  });

  it('deve emitir o evento de delete com o id correto ao clicar no botão (Must emit the delete event with the correct id when clicking the button)', () => {
    spyOn(component.delete, 'emit');

    const closeButton = fixture.debugElement.query(By.css('.card__close')).nativeElement;
    closeButton.click();

    expect(component.delete.emit).toHaveBeenCalledOnceWith(1);
  });
});
