import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { By } from '@angular/platform-browser'; // Utilitário para buscar elementos no DOM
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let component2: CardListComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent, 
        CardListComponent, 
        HttpClientTestingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Dece ser criado o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar a imagem do ícone corretamente', () => {
    const imgElement = fixture.debugElement.query(By.css('.main__logo')).nativeElement as HTMLImageElement;
    expect(imgElement.src).toContain(component.icon);
    expect(imgElement.alt).toBe('Logo teste anota ai');
  });

  it('deve renderizar o título correto', () => {
    const titleElement = fixture.debugElement.query(By.css('.main__title')).nativeElement;
    expect(titleElement.textContent).toContain('Teste de Desenvolvedor Front-End-Anota AI');
  });

  it('deve renderizar o subtítulo correto', () => {
    const subtitleElement = fixture.debugElement.query(By.css('.main__subtitle')).nativeElement;
    expect(subtitleElement.textContent).toContain('Gustavo Henrique Meinhardt Karnopp');
  });

  it('deve conter o componente filho <app-card-list>', () => {
    const childComponent = fixture.debugElement.query(By.directive(CardListComponent));
    expect(childComponent).not.toBeNull();
  });
  
});
