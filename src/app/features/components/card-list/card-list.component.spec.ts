import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // Utilitário para buscar elementos no DOM
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardListComponent,
        HttpClientTestingModule,
      ] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
